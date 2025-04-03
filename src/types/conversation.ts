export interface User {
  user_id: string;
  display_name: string;
  contact?: string | null;
  role?: string;
}

export interface AIResponse {
  text: string;
  confidence_score: number;
  timestamp: string;
  source?: string;
}

export interface Channel {
  type: 'teams' | 'website' | 'mobile_app' | 'phone' | 'email';
  channel_id: string;
}

export interface Metadata {
  session_id: string;
  processing_time?: number;
  tags?: string[];
}

export interface Ticket {
  tenant_id: string;
  ticket_id: string;
  audit_id: string;
  status: 'open' | 'closed' | 'in_progress' | 'resolved';
  created_at: string;
  updated_at: string;
  user: User;
  question: string;
  answer: string;
  ai_context: {
    response: string;
    confidence_score: number;
    governance_reason: string | null;
  };
  assignment: {
    assigned_to: string | null;
    external_system: string | null;
    external_ticket_id: string | null;
  };
  resolution: {
    resolved: boolean;
    resolution_text: string | null;
    resolved_at: string | null;
  };
  priority: 'low' | 'medium' | 'high';
  metadata: Metadata;
}

export interface Audit {
  tenant_id: string;
  audit_id: string;
  timestamp: string;
  user: User;
  channel: Channel;
  question: {
    text: string;
    timestamp: string;
  };
  answer: {
    text: string;
    timestamp: string;
  };
  ai_response: AIResponse;
  governance: {
    checked: boolean;
    results: any | null;
    timestamp: string;
  };
  ticket_decision: {
    should_open: boolean;
    reason: string | null;
    ticket_id: string | null;
    timestamp: string;
  };
  metadata: Metadata;
}

export interface ConversationItem {
  id: string;
  user: {
    name: string;
    avatar: string;
    platform: string;
  };
  message: string;
  timestamp: Date;
  confidence: number;
  responseTime: number;
  sessionId: string;
  type: 'ticket' | 'audit';
  data: Ticket | Audit;
} 