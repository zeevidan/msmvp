import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Text,
  Card,
  Button,
  Input,
  Badge,
} from '@fluentui/react-components';
import {
  Search24Regular,
  Filter24Regular,
  ArrowExport24Regular,
  Share24Regular,
  Print24Regular,
} from '@fluentui/react-icons';
import { Sidebar } from './Sidebar';
import { ConversationList } from './ConversationList';
import { ConversationDetails } from './ConversationDetails';
import { brandColors, gradients } from '../theme/tokens';
import { ConversationItem } from '../types/conversation';
import { conversationService } from '../services/conversationService';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr 400px',
    height: '100vh',
    backgroundColor: '#F5F5F5',
    overflow: 'hidden',
  },
  sidebar: {
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderLeft('1px', 'solid', tokens.colorNeutralStroke1),
    ...shorthands.borderRight('1px', 'solid', tokens.colorNeutralStroke1),
    height: '100vh',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...shorthands.padding('16px', '24px'),
    ...shorthands.borderBottom('1px', 'solid', tokens.colorNeutralStroke1),
    backgroundColor: 'white',
    gap: '32px',
    flexShrink: 0,
  },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    color: brandColors.primary,
    whiteSpace: 'nowrap',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flex: 1,
    maxWidth: '600px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    ...shorthands.padding('16px'),
    backgroundColor: '#F5F5F5',
    flexShrink: 0,
  },
  statCard: {
    ...shorthands.padding('20px'),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: '12px',
    border: 'none',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  statValue: {
    fontSize: tokens.fontSizeHero700,
    fontWeight: tokens.fontWeightSemibold,
    color: brandColors.primary,
    marginBottom: '4px',
  },
  statLabel: {
    color: brandColors.gray,
    fontSize: tokens.fontSizeBase300,
    marginBottom: '8px',
  },
  trend: {
    fontSize: tokens.fontSizeBase200,
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  trendUp: {
    color: brandColors.green,
  },
  trendDown: {
    color: brandColors.orange,
  },
  searchInput: {
    '& input': {
      backgroundColor: '#F5F5F5',
    },
  },
  actionButton: {
    backgroundColor: 'transparent',
    color: brandColors.gray,
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: brandColors.primary,
    },
  },
  primaryButton: {
    backgroundColor: brandColors.primary,
    color: 'white',
    '&:hover': {
      backgroundColor: brandColors.primaryDark,
    },
  },
  listContainer: {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  detailsContainer: {
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
});

export const Layout: React.FC = () => {
  const styles = useStyles();
  const [selectedConversation, setSelectedConversation] = useState<ConversationItem | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConversationSelect = async (conversation: ConversationItem) => {
    try {
      setLoading(true);
      // Fetch the full conversation details from the service
      const fullConversation = await conversationService.getConversationById(conversation.id);
      if (fullConversation) {
        setSelectedConversation(fullConversation);
      }
    } catch (error) {
      console.error('Error fetching conversation details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <main className={styles.main}>
        <div className={styles.header}>
          <Text className={styles.title}>
            Conversation Logs
          </Text>
          <div className={styles.searchContainer}>
            <Input
              className={styles.searchInput}
              contentBefore={<Search24Regular />}
              placeholder="Search logs..."
              style={{ width: '100%' }}
              appearance="outline"
              size="medium"
            />
            <Button 
              className={styles.actionButton}
              icon={<Filter24Regular />}
            >
              Filter
            </Button>
            <Button 
              className={styles.primaryButton}
              icon={<ArrowExport24Regular />}
            >
              Export
            </Button>
          </div>
          <div className={styles.actions}>
            <Button className={styles.actionButton} icon={<Share24Regular />} />
            <Button className={styles.actionButton} icon={<Print24Regular />} />
          </div>
        </div>
        <div className={styles.stats}>
          <Card className={styles.statCard}>
            <div className={styles.statValue}>1,247</div>
            <Text className={styles.statLabel}>Total Conversations</Text>
            <Text className={styles.trend + ' ' + styles.trendUp}>↑ 12% from last month</Text>
          </Card>
          <Card className={styles.statCard}>
            <div className={styles.statValue}>1.8s</div>
            <Text className={styles.statLabel}>Avg. Response Time</Text>
            <Text className={styles.trend + ' ' + styles.trendDown}>↓ 5% from last month</Text>
          </Card>
          <Card className={styles.statCard}>
            <div className={styles.statValue}>76%</div>
            <Text className={styles.statLabel}>AI Confidence</Text>
            <Text className={styles.trend + ' ' + styles.trendUp}>↑ 8% from last month</Text>
          </Card>
          <Card className={styles.statCard}>
            <div className={styles.statValue}>42</div>
            <Text className={styles.statLabel}>Low Confidence Responses</Text>
            <Text className={styles.trend + ' ' + styles.trendUp}>↑ 3% from last month</Text>
          </Card>
        </div>
        <div className={styles.listContainer}>
          <ConversationList 
            onSelect={handleConversationSelect}
            selectedId={selectedConversation?.id}
          />
        </div>
      </main>
      <div className={styles.detailsContainer}>
        <ConversationDetails
          conversation={selectedConversation}
          loading={loading}
        />
      </div>
    </div>
  );
}; 