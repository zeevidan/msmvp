import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Avatar,
  Badge,
  Spinner,
} from '@fluentui/react-components';
import { format } from 'date-fns';
import { brandColors } from '../theme/tokens';
import { ConversationItem } from '../types/conversation';
import { conversationService } from '../services/conversationService';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    ...shorthands.padding('20px'),
    backgroundColor: 'white',
    marginBottom: '1px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#F8F8F8',
      transform: 'translateX(4px)',
    },
  },
  selectedItem: {
    backgroundColor: '#F0F9FE',
    borderLeft: `4px solid ${brandColors.primary}`,
    '&:hover': {
      backgroundColor: '#E5F4FD',
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  badge: {
    backgroundColor: brandColors.primary,
    color: 'white',
    ...shorthands.padding('4px', '12px'),
    ...shorthands.borderRadius('16px'),
    fontSize: tokens.fontSizeBase200,
  },
  message: {
    color: brandColors.gray,
    marginBottom: '12px',
    lineHeight: '1.5',
  },
  metrics: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confidence: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  confidenceText: {
    fontSize: tokens.fontSizeBase200,
    color: brandColors.grayLight,
    minWidth: '48px',
  },
  confidenceBar: {
    width: '100px',
    height: '4px',
    backgroundColor: '#E0E0E0',
    ...shorthands.borderRadius('2px'),
    overflow: 'hidden',
  },
  confidenceFill: {
    height: '100%',
    transition: 'width 0.3s ease',
    ...shorthands.borderRadius('2px'),
  },
  timestamp: {
    color: brandColors.grayLight,
    fontSize: tokens.fontSizeBase200,
  },
  responseTime: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: brandColors.grayLight,
    fontSize: tokens.fontSizeBase200,
  },
  responseTimeIcon: {
    color: brandColors.primary,
  },
});

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 70) return brandColors.green;
  if (confidence >= 30) return brandColors.yellow;
  return brandColors.orange;
};

const getPlatformName = (channel: string) => {
  switch (channel) {
    case 'teams':
      return 'Teams';
    case 'website':
      return 'Website';
    case 'mobile_app':
      return 'Mobile App';
    default:
      return channel;
  }
};

interface ConversationListProps {
  onSelect: (item: ConversationItem) => void;
  selectedId?: string;
}

export const ConversationList: React.FC<ConversationListProps> = ({ onSelect, selectedId }) => {
  const styles = useStyles();
  const [conversations, setConversations] = useState<ConversationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setLoading(true);
        const data = await conversationService.getConversations();
        setConversations(data);
        setError(null);
      } catch (err) {
        setError('Failed to load conversations');
        console.error('Error fetching conversations:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  if (loading) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container} style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={styles.item + (selectedId === conversation.id ? ' ' + styles.selectedItem : '')}
          onClick={() => onSelect(conversation)}
        >
          <Avatar
            size={40}
            name={conversation.user.name}
            color="colorful"
            style={{
              fontSize: tokens.fontSizeBase300,
              fontWeight: tokens.fontWeightSemibold,
            }}
          >
            {conversation.user.avatar}
          </Avatar>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.name}>
                <Text weight="semibold">{conversation.user.name}</Text>
                <Badge appearance="filled" className={styles.badge}>
                  {conversation.user.platform}
                </Badge>
              </div>
              <Text className={styles.timestamp}>
                {format(conversation.timestamp, 'MMM dd, yyyy HH:mm')}
              </Text>
            </div>
            <Text block className={styles.message}>{conversation.message}</Text>
            <div className={styles.metrics}>
              <div className={styles.confidence}>
                <Text className={styles.confidenceText}>
                  {conversation.confidence}%
                </Text>
                <div className={styles.confidenceBar}>
                  <div
                    className={styles.confidenceFill}
                    style={{
                      width: `${conversation.confidence}%`,
                      backgroundColor: getConfidenceColor(conversation.confidence),
                    }}
                  />
                </div>
              </div>
              <div className={styles.responseTime}>
                <span className={styles.responseTimeIcon}>⚡</span>
                <Text>{conversation.responseTime}ms</Text>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 