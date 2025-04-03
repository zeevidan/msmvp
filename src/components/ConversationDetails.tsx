import React, { useEffect } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Badge,
  Spinner,
  Divider,
  Button,
  Avatar,
  Persona,
  TabList,
  Tab,
  TabValue,
  SelectTabEvent,
  SelectTabData,
} from '@fluentui/react-components';
import { format } from 'date-fns';
import { brandColors } from '../theme/tokens';
import { ConversationItem, Ticket, Audit } from '../types/conversation';
import { Person24Regular, Chat24Regular, Document24Regular, Info24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.padding('16px'),
    height: '100%',
  },
  section: {
    marginBottom: '16px',
  },
  sectionTitle: {
    fontSize: tokens.fontSizeBase400,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: '8px',
    color: brandColors.gray,
  },
  field: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  fieldLabel: {
    width: '100px',
    color: brandColors.grayLight,
    fontSize: tokens.fontSizeBase200,
  },
  fieldValue: {
    flex: 1,
    fontSize: tokens.fontSizeBase200,
  },
  badge: {
    backgroundColor: brandColors.primary,
    color: 'white',
    ...shorthands.padding('2px', '8px'),
    ...shorthands.borderRadius('12px'),
    fontSize: tokens.fontSizeBase100,
  },
  message: {
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.padding('12px'),
    ...shorthands.borderRadius('6px'),
    marginBottom: '12px',
  },
  confidence: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  confidenceText: {
    fontSize: tokens.fontSizeBase100,
    color: brandColors.grayLight,
    minWidth: '40px',
  },
  confidenceBar: {
    width: '80px',
    height: '3px',
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.borderRadius('2px'),
    overflow: 'hidden',
  },
  confidenceFill: {
    height: '100%',
    transition: 'width 0.3s ease',
    ...shorthands.borderRadius('2px'),
  },
  actionButton: {
    backgroundColor: brandColors.primary,
    color: 'white',
    ...shorthands.padding('6px', '12px'),
    ...shorthands.borderRadius('4px'),
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: brandColors.primaryDark,
    },
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: brandColors.grayLight,
  },
  loadingState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  headerTitle: {
    fontSize: tokens.fontSizeBase500,
    fontWeight: tokens.fontWeightSemibold,
    color: brandColors.primary,
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
    marginBottom: '12px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
  },
  infoItemVertical: {
    display: 'flex',
    flexDirection: 'column',
    gridColumn: 'span 2',
  },
  infoLabel: {
    fontSize: tokens.fontSizeBase200,
    color: brandColors.grayLight,
    marginRight: '6px',
  },
  infoValue: {
    fontSize: tokens.fontSizeBase200,
  },
  sessionId: {
    fontSize: tokens.fontSizeBase200,
    wordBreak: 'break-all',
    marginTop: '4px',
  },
  divider: {
    margin: '12px 0',
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
  userLink: {
    color: brandColors.primary,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  tabList: {
    marginBottom: '16px',
  },
  tabContent: {
    marginTop: '16px',
  },
  persona: {
    marginBottom: '16px',
  },
  metadata: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '16px',
    padding: '12px',
    backgroundColor: tokens.colorNeutralBackground2,
    ...shorthands.borderRadius('6px'),
  },
  metadataItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  metadataLabel: {
    color: brandColors.grayLight,
    fontSize: tokens.fontSizeBase200,
  },
  metadataValue: {
    fontSize: tokens.fontSizeBase200,
  },
});

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 70) return brandColors.green;
  if (confidence >= 30) return brandColors.yellow;
  return brandColors.orange;
};

const getAnswer = (conversation: ConversationItem) => {
  if (conversation.type === 'ticket') {
    return (conversation.data as Ticket).answer;
  }
  return (conversation.data as Audit).answer.text;
};

interface ConversationDetailsProps {
  conversation: ConversationItem | null;
  loading?: boolean;
}

export const ConversationDetails: React.FC<ConversationDetailsProps> = ({ conversation, loading = false }) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState<TabValue>('conversation');

  // Load the last selected tab from localStorage or default to 'conversation'
  useEffect(() => {
    const lastTab = localStorage.getItem('lastSelectedTab') as TabValue;
    if (lastTab) {
      setSelectedTab(lastTab);
    }
  }, []);

  // Update selected tab when conversation changes
  useEffect(() => {
    if (conversation) {
      const lastTab = localStorage.getItem('lastSelectedTab') as TabValue;
      
      // Check if the last selected tab is valid for the current conversation type
      const isValidTab = (
        lastTab === 'conversation' || 
        lastTab === 'details' || 
        (lastTab === 'ticket' && conversation.type === 'ticket') ||
        (lastTab === 'audit' && conversation.type === 'audit')
      );
      
      if (isValidTab) {
        setSelectedTab(lastTab);
      } else if (lastTab === 'ticket' && conversation.type === 'audit') {
        // If last tab was 'ticket' and current conversation is 'audit', switch to 'audit' tab
        setSelectedTab('audit');
      } else if (lastTab === 'audit' && conversation.type === 'ticket') {
        // If last tab was 'audit' and current conversation is 'ticket', switch to 'ticket' tab
        setSelectedTab('ticket');
      } else {
        // Default to 'conversation' tab
        setSelectedTab('conversation');
      }
    }
  }, [conversation]);

  const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
    setSelectedTab(data.value);
    // Save the selected tab to localStorage
    localStorage.setItem('lastSelectedTab', data.value as string);
  };

  if (loading) {
    return (
      <div className={styles.loadingState}>
        <Spinner size="large" />
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className={styles.emptyState}>
        <Text>Select a conversation to view details</Text>
      </div>
    );
  }

  const userId = conversation.type === 'ticket' 
    ? (conversation.data as Ticket).user.user_id 
    : (conversation.data as Audit).user.user_id;

  const handleUserClick = () => {
    // In a real application, this would navigate to the user profile
    console.log(`Navigating to user profile: ${userId}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text className={styles.headerTitle}>Conversation Details</Text>
        <Badge appearance="filled" className={styles.badge}>
          {conversation.type.toUpperCase()}
        </Badge>
      </div>

      <div className={styles.persona}>
        <Persona
          avatar={{
            image: undefined,
            initials: conversation.user.avatar,
            color: "colorful",
          }}
          name={conversation.user.name}
          secondaryText={`ID: ${userId}`}
          presence={{ status: "available" }}
          onClick={handleUserClick}
          className={styles.userLink}
        />
      </div>

      <TabList 
        selectedValue={selectedTab} 
        onTabSelect={onTabSelect}
        className={styles.tabList}
      >
        <Tab icon={<Chat24Regular />} value="conversation">Conversation</Tab>
        <Tab icon={<Info24Regular />} value="details">Details</Tab>
        {conversation.type === 'ticket' && (
          <Tab icon={<Document24Regular />} value="ticket">Ticket</Tab>
        )}
        {conversation.type === 'audit' && (
          <Tab icon={<Document24Regular />} value="audit">Audit</Tab>
        )}
      </TabList>

      {selectedTab === 'conversation' && (
        <div className={styles.tabContent}>
          <div className={styles.message}>
            <Text weight="semibold" block>Question:</Text>
            <Text block>{conversation.message}</Text>
          </div>
          <div className={styles.message}>
            <Text weight="semibold" block>Answer:</Text>
            <Text block>{getAnswer(conversation)}</Text>
          </div>
          <div className={styles.confidence}>
            <Text className={styles.confidenceText}>
              AI Confidence: {conversation.confidence}%
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
        </div>
      )}

      {selectedTab === 'details' && (
        <div className={styles.tabContent}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Platform:</Text>
              <Text className={styles.infoValue}>{conversation.user.platform}</Text>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Time:</Text>
              <Text className={styles.infoValue}>
                {format(conversation.timestamp, 'MMM dd, HH:mm')}
              </Text>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Response:</Text>
              <div className={styles.responseTime}>
                <span className={styles.responseTimeIcon}>⚡</span>
                <Text>{conversation.responseTime}ms</Text>
              </div>
            </div>
            <div className={styles.infoItemVertical}>
              <Text className={styles.infoLabel}>Session ID:</Text>
              <Text className={styles.sessionId}>{conversation.sessionId}</Text>
            </div>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Tenant ID</Text>
              <Text className={styles.metadataValue}>
                {conversation.type === 'ticket' 
                  ? (conversation.data as Ticket).tenant_id 
                  : (conversation.data as Audit).tenant_id}
              </Text>
            </div>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Channel</Text>
              <Text className={styles.metadataValue}>
                {conversation.type === 'audit' 
                  ? (conversation.data as Audit).channel.type 
                  : 'N/A'}
              </Text>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'ticket' && conversation.type === 'ticket' && (
        <div className={styles.tabContent}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Status:</Text>
              <Badge appearance="filled" className={styles.badge}>
                {(conversation.data as Ticket).status}
              </Badge>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Priority:</Text>
              <Text className={styles.infoValue}>{(conversation.data as Ticket).priority}</Text>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Resolution:</Text>
              <Text className={styles.infoValue}>
                {(conversation.data as Ticket).resolution.resolved ? 'Resolved' : 'Pending'}
              </Text>
            </div>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Ticket ID</Text>
              <Text className={styles.metadataValue}>{(conversation.data as Ticket).ticket_id}</Text>
            </div>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Created</Text>
              <Text className={styles.metadataValue}>
                {format(new Date((conversation.data as Ticket).created_at), 'MMM dd, HH:mm')}
              </Text>
            </div>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Updated</Text>
              <Text className={styles.metadataValue}>
                {format(new Date((conversation.data as Ticket).updated_at), 'MMM dd, HH:mm')}
              </Text>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'audit' && conversation.type === 'audit' && (
        <div className={styles.tabContent}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Processing:</Text>
              <Text className={styles.infoValue}>
                {(conversation.data as Audit).metadata.processing_time}ms
              </Text>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Governance:</Text>
              <Text className={styles.infoValue}>
                {(conversation.data as Audit).governance.checked ? 'Completed' : 'Pending'}
              </Text>
            </div>
            <div className={styles.infoItem}>
              <Text className={styles.infoLabel}>Decision:</Text>
              <Text className={styles.infoValue}>
                {(conversation.data as Audit).ticket_decision.should_open ? 'Open Ticket' : 'No Action'}
              </Text>
            </div>
          </div>

          <div className={styles.metadata}>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Audit ID</Text>
              <Text className={styles.metadataValue}>{(conversation.data as Audit).audit_id}</Text>
            </div>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Question Time</Text>
              <Text className={styles.metadataValue}>
                {format(new Date((conversation.data as Audit).question.timestamp), 'MMM dd, HH:mm')}
              </Text>
            </div>
            <div className={styles.metadataItem}>
              <Text className={styles.metadataLabel}>Answer Time</Text>
              <Text className={styles.metadataValue}>
                {format(new Date((conversation.data as Audit).answer.timestamp), 'MMM dd, HH:mm')}
              </Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 