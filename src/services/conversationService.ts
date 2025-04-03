import { ConversationItem, Ticket, Audit } from '../types/conversation';

// Mock data for development
const mockConversations: ConversationItem[] = [
  {
    id: '1',
    type: 'audit',
    user: {
      name: 'John Doe',
      avatar: 'JD',
      platform: 'Teams',
    },
    message: 'I received a Vermont municipal complaint in the City of Burlington, what do I do?',
    timestamp: new Date('2025-03-21T21:35:35.625Z'),
    confidence: 100,
    responseTime: 1682,
    sessionId: '3920e8ac-13b7-4137-b834-e824a879a29b',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      audit_id: 'DFfLN84BRBeAkqezy2xc+A==',
      timestamp: '2025-03-21T21:35:35.625Z',
      user: {
        user_id: '78716384-dac8-4e96-8217-baed6162b55e',
        display_name: 'TODO',
        role: 'test'
      },
      channel: {
        type: 'teams',
        channel_id: 'TODO'
      },
      question: {
        text: 'I received a Vermont municipal complaint in the City of Burlington, what do I do?',
        timestamp: '2025-03-21T21:35:35.625Z'
      },
      answer: {
        text: 'Follow the directions on the back of the ticket...',
        timestamp: '2025-03-21T21:35:37.304Z'
      },
      ai_response: {
        text: 'Follow the directions on the back of the ticket...',
        confidence_score: 1,
        timestamp: '2025-03-21T21:35:35.625Z',
        source: 'none'
      },
      governance: {
        checked: false,
        results: null,
        timestamp: '2025-03-21T21:35:35.625Z'
      },
      ticket_decision: {
        should_open: false,
        reason: null,
        ticket_id: null,
        timestamp: '2025-03-21T21:35:35.625Z'
      },
      metadata: {
        session_id: '3920e8ac-13b7-4137-b834-e824a879a29b',
        processing_time: 1682
      }
    } as Audit
  },
  {
    id: '2',
    type: 'ticket',
    user: {
      name: 'Jane Smith',
      avatar: 'JS',
      platform: 'Website',
    },
    message: 'How do I request a hearing before the Burlington Housing Board of Review?',
    timestamp: new Date('2025-03-21T12:19:33.056Z'),
    confidence: 2.7,
    responseTime: 2450,
    sessionId: '65af452b-2cbe-4eae-b658-5e677d06db43',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      ticket_id: 't1jkYB4XR7GrvvBMnWTPRg==',
      audit_id: '727UdKqESySMls5qI9P/mA==',
      status: 'open',
      created_at: '2025-03-21T12:19:33.056Z',
      updated_at: '2025-03-21T12:19:33.056Z',
      user: {
        user_id: '78716384-dac8-4e96-8217-baed6162b55e',
        display_name: 'TODO',
        contact: null
      },
      question: 'How do I request a hearing before the Burlington Housing Board of Review?',
      answer: 'Sorry, I couldn\'t find an answer to that.',
      ai_context: {
        response: 'Within 30 days of the ticket date...',
        confidence_score: 0.0268,
        governance_reason: null
      },
      assignment: {
        assigned_to: null,
        external_system: null,
        external_ticket_id: null
      },
      resolution: {
        resolved: false,
        resolution_text: null,
        resolved_at: null
      },
      priority: 'medium',
      metadata: {
        session_id: '65af452b-2cbe-4eae-b658-5e677d06db43',
        tags: []
      }
    } as Ticket
  },
  {
    id: '3',
    type: 'audit',
    user: {
      name: 'Robert Johnson',
      avatar: 'RJ',
      platform: 'Phone',
    },
    message: 'I need to report a pothole on Main Street between Church and College. It\'s causing damage to vehicles and is a safety hazard.',
    timestamp: new Date('2025-03-20T15:42:18.123Z'),
    confidence: 95.8,
    responseTime: 1876,
    sessionId: '7b3e9f2a-1d5c-4e8f-9a6b-3c2d1e0f8a9b',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      audit_id: 'Kj8mNp2QrS5tUvWxYz1bCdEfG==',
      timestamp: '2025-03-20T15:42:18.123Z',
      user: {
        user_id: '9a8b7c6d-5e4f-3d2c-1b0a-9f8e7d6c5b4a',
        display_name: 'Robert Johnson',
        role: 'resident'
      },
      channel: {
        type: 'phone',
        channel_id: '+18025551234'
      },
      question: {
        text: 'I need to report a pothole on Main Street between Church and College. It\'s causing damage to vehicles and is a safety hazard.',
        timestamp: '2025-03-20T15:42:18.123Z'
      },
      answer: {
        text: 'Thank you for reporting this pothole. I\'ve created a service request for the Public Works Department. A crew will be dispatched to assess and repair the pothole within 48 hours. You can track the status of your request using the reference number #PW-2025-0423. If you experience any vehicle damage due to this pothole, please contact our Risk Management office at 802-865-7000 for information about filing a claim.',
        timestamp: '2025-03-20T15:42:20.456Z'
      },
      ai_response: {
        text: 'Thank you for reporting this pothole. I\'ve created a service request for the Public Works Department. A crew will be dispatched to assess and repair the pothole within 48 hours. You can track the status of your request using the reference number #PW-2025-0423. If you experience any vehicle damage due to this pothole, please contact our Risk Management office at 802-865-7000 for information about filing a claim.',
        confidence_score: 0.958,
        timestamp: '2025-03-20T15:42:18.123Z',
        source: 'knowledge_base'
      },
      governance: {
        checked: true,
        results: {
          requires_human_review: false,
          flagged_content: false,
          compliance_status: 'compliant'
        },
        timestamp: '2025-03-20T15:42:18.123Z'
      },
      ticket_decision: {
        should_open: true,
        reason: 'Service request requires tracking and follow-up',
        ticket_id: 't2jkYB4XR7GrvvBMnWTPRg==',
        timestamp: '2025-03-20T15:42:18.123Z'
      },
      metadata: {
        session_id: '7b3e9f2a-1d5c-4e8f-9a6b-3c2d1e0f8a9b',
        processing_time: 1876
      }
    } as Audit
  },
  {
    id: '4',
    type: 'ticket',
    user: {
      name: 'Maria Rodriguez',
      avatar: 'MR',
      platform: 'Email',
    },
    message: 'I\'m trying to schedule a building permit inspection for my home renovation project. The contractor finished the electrical work yesterday, and I need an inspection before they can proceed with the drywall installation.',
    timestamp: new Date('2025-03-19T09:15:42.789Z'),
    confidence: 88.3,
    responseTime: 2134,
    sessionId: '3f5e7d9c-1b3a-5f7d-9c1b-3a5f7d9c1b3a',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      ticket_id: 't3jkYB4XR7GrvvBMnWTPRg==',
      audit_id: 'Lk9mNp2QrS5tUvWxYz1bCdEfG==',
      status: 'in_progress',
      created_at: '2025-03-19T09:15:42.789Z',
      updated_at: '2025-03-19T09:20:15.123Z',
      user: {
        user_id: '1b3a5f7d-9c1b-3a5f-7d9c-1b3a5f7d9c1b',
        display_name: 'Maria Rodriguez',
        contact: 'maria.rodriguez@email.com'
      },
      question: 'I\'m trying to schedule a building permit inspection for my home renovation project. The contractor finished the electrical work yesterday, and I need an inspection before they can proceed with the drywall installation.',
      answer: 'I\'ve forwarded your request to our Building Inspector. For electrical inspections, we typically schedule within 2 business days. You should receive a call or email from our inspector within 24 hours to confirm a specific date and time. Please have your permit number (2025-BLD-0421) ready when they contact you. If you don\'t hear from us by tomorrow afternoon, please call our direct line at 802-865-7015.',
      ai_context: {
        response: 'I\'ve forwarded your request to our Building Inspector. For electrical inspections, we typically schedule within 2 business days. You should receive a call or email from our inspector within 24 hours to confirm a specific date and time. Please have your permit number (2025-BLD-0421) ready when they contact you. If you don\'t hear from us by tomorrow afternoon, please call our direct line at 802-865-7015.',
        confidence_score: 0.883,
        governance_reason: null
      },
      assignment: {
        assigned_to: 'building_inspector',
        external_system: 'permit_tracker',
        external_ticket_id: 'PT-2025-0421'
      },
      resolution: {
        resolved: false,
        resolution_text: 'Awaiting inspector contact',
        resolved_at: null
      },
      priority: 'high',
      metadata: {
        session_id: '3f5e7d9c-1b3a-5f7d-9c1b-3a5f7d9c1b3a',
        tags: ['building_permit', 'inspection', 'electrical']
      }
    } as Ticket
  },
  {
    id: '5',
    type: 'audit',
    user: {
      name: 'David Chen',
      avatar: 'DC',
      platform: 'Teams',
    },
    message: 'What are the current water restrictions in Burlington? I\'m concerned about my garden during this dry spell, and I want to make sure I\'m following the guidelines correctly.',
    timestamp: new Date('2025-03-18T14:27:33.456Z'),
    confidence: 92.1,
    responseTime: 1567,
    sessionId: '5a7c9e1b-3d5f-7a9c-1e3b-5d7f9a1c3e5b',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      audit_id: 'Mn0pQr2StUvWxYz3bCdEfGhI==',
      timestamp: '2025-03-18T14:27:33.456Z',
      user: {
        user_id: '3d5f7a9c-1e3b-5d7f-9a1c-3e5b7d9f1a3c',
        display_name: 'David Chen',
        role: 'resident'
      },
      channel: {
        type: 'teams',
        channel_id: 'david.chen@burlington.gov'
      },
      question: {
        text: 'What are the current water restrictions in Burlington? I\'m concerned about my garden during this dry spell, and I want to make sure I\'m following the guidelines correctly.',
        timestamp: '2025-03-18T14:27:33.456Z'
      },
      answer: {
        text: 'Currently, Burlington is under Stage 2 water restrictions due to the extended dry period. Under these restrictions:\n\n1. Outdoor watering is allowed only on Tuesdays, Thursdays, and Saturdays between 6 PM and 10 AM the following day.\n2. Even-numbered addresses may water on Tuesdays and Saturdays.\n3. Odd-numbered addresses may water on Thursdays.\n4. Hand watering of gardens is allowed daily but should be done efficiently.\n5. No washing of vehicles, driveways, or sidewalks is permitted.\n\nThese restrictions are in effect until further notice. You can check the current status on our website or call 802-865-7000 for updates. Thank you for your cooperation in conserving water during this period.',
        timestamp: '2025-03-18T14:27:35.789Z'
      },
      ai_response: {
        text: 'Currently, Burlington is under Stage 2 water restrictions due to the extended dry period. Under these restrictions:\n\n1. Outdoor watering is allowed only on Tuesdays, Thursdays, and Saturdays between 6 PM and 10 AM the following day.\n2. Even-numbered addresses may water on Tuesdays and Saturdays.\n3. Odd-numbered addresses may water on Thursdays.\n4. Hand watering of gardens is allowed daily but should be done efficiently.\n5. No washing of vehicles, driveways, or sidewalks is permitted.\n\nThese restrictions are in effect until further notice. You can check the current status on our website or call 802-865-7000 for updates. Thank you for your cooperation in conserving water during this period.',
        confidence_score: 0.921,
        timestamp: '2025-03-18T14:27:33.456Z',
        source: 'policy_document'
      },
      governance: {
        checked: true,
        results: {
          requires_human_review: false,
          flagged_content: false,
          compliance_status: 'compliant'
        },
        timestamp: '2025-03-18T14:27:33.456Z'
      },
      ticket_decision: {
        should_open: false,
        reason: 'Information request fully answered',
        ticket_id: null,
        timestamp: '2025-03-18T14:27:33.456Z'
      },
      metadata: {
        session_id: '5a7c9e1b-3d5f-7a9c-1e3b-5d7f9a1c3e5b',
        processing_time: 1567
      }
    } as Audit
  },
  {
    id: '6',
    type: 'ticket',
    user: {
      name: 'Sarah Williams',
      avatar: 'SW',
      platform: 'Website',
    },
    message: 'I\'m trying to pay my property tax bill online, but I\'m having trouble with the payment portal. It keeps saying "transaction failed" but doesn\'t give me any specific error message. I\'ve tried two different credit cards and my bank account, but nothing works. The payment is due in 3 days, and I\'m worried about late fees.',
    timestamp: new Date('2025-03-17T11:08:22.345Z'),
    confidence: 45.2,
    responseTime: 2789,
    sessionId: '7c9e1b3d-5f7a-9c1e-3b5d-7f9a1c3e5b7d',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      ticket_id: 't4jkYB4XR7GrvvBMnWTPRg==',
      audit_id: 'No1pQr2StUvWxYz4bCdEfGhI==',
      status: 'resolved',
      created_at: '2025-03-17T11:08:22.345Z',
      updated_at: '2025-03-17T11:45:10.678Z',
      user: {
        user_id: '5f7a9c1e-3b5d-7f9a-1c3e-5b7d9f1a3c5e',
        display_name: 'Sarah Williams',
        contact: 'sarah.williams@email.com'
      },
      question: 'I\'m trying to pay my property tax bill online, but I\'m having trouble with the payment portal. It keeps saying "transaction failed" but doesn\'t give me any specific error message. I\'ve tried two different credit cards and my bank account, but nothing works. The payment is due in 3 days, and I\'m worried about late fees.',
      answer: 'I\'m sorry to hear you\'re having trouble with the payment portal. Our IT department has identified an issue with the payment processing system that\'s affecting some users. As a temporary solution, you can:\n\n1. Pay by phone at 802-865-7000 (option 3 for payments)\n2. Mail a check to: Burlington City Hall, 149 Church Street, Burlington, VT 05401\n3. Visit City Hall in person during business hours (8:30 AM - 4:30 PM)\n\nTo avoid late fees, please make your payment by one of these methods before the due date. We\'ve also extended the grace period by 5 business days to account for these technical difficulties. Your account has been flagged to prevent late fees if payment is received within this extended period.',
      ai_context: {
        response: 'I\'m sorry to hear you\'re having trouble with the payment portal. Our IT department has identified an issue with the payment processing system that\'s affecting some users. As a temporary solution, you can:\n\n1. Pay by phone at 802-865-7000 (option 3 for payments)\n2. Mail a check to: Burlington City Hall, 149 Church Street, Burlington, VT 05401\n3. Visit City Hall in person during business hours (8:30 AM - 4:30 PM)\n\nTo avoid late fees, please make your payment by one of these methods before the due date. We\'ve also extended the grace period by 5 business days to account for these technical difficulties. Your account has been flagged to prevent late fees if payment is received within this extended period.',
        confidence_score: 0.452,
        governance_reason: 'Low confidence due to technical issue requiring human verification'
      },
      assignment: {
        assigned_to: 'finance_department',
        external_system: 'payment_system',
        external_ticket_id: 'PAY-2025-0417'
      },
      resolution: {
        resolved: true,
        resolution_text: 'Provided alternative payment methods and extended grace period',
        resolved_at: '2025-03-17T11:45:10.678Z'
      },
      priority: 'high',
      metadata: {
        session_id: '7c9e1b3d-5f7a-9c1e-3b5d-7f9a1c3e5b7d',
        tags: ['property_tax', 'payment_issue', 'technical_support']
      }
    } as Ticket
  },
  {
    id: '7',
    type: 'audit',
    user: {
      name: 'Michael O\'Brien',
      avatar: 'MO',
      platform: 'Phone',
    },
    message: 'I\'m calling about the noise complaint I filed last week about my neighbor\'s construction project. They\'re still working before 7 AM and after 8 PM, which violates the city\'s noise ordinance. I\'ve tried talking to them, but they just ignore me. What can the city do about this?',
    timestamp: new Date('2025-03-16T08:42:15.678Z'),
    confidence: 78.5,
    responseTime: 3245,
    sessionId: '9e1b3d5f-7a9c-1e3b-5d7f-9a1c3e5b7d9e',
    data: {
      tenant_id: '7143b8d7-19db-45b8-8c75-9a0329d74688',
      audit_id: 'Pq2rS3tUvWxYz5bCdEfGhIjK==',
      timestamp: '2025-03-16T08:42:15.678Z',
      user: {
        user_id: '7a9c1e3b-5d7f-9a1c-3e5b-7d9f1a3c5e7a',
        display_name: 'Michael O\'Brien',
        role: 'resident'
      },
      channel: {
        type: 'phone',
        channel_id: '+18025557890'
      },
      question: {
        text: 'I\'m calling about the noise complaint I filed last week about my neighbor\'s construction project. They\'re still working before 7 AM and after 8 PM, which violates the city\'s noise ordinance. I\'ve tried talking to them, but they just ignore me. What can the city do about this?',
        timestamp: '2025-03-16T08:42:15.678Z'
      },
      answer: {
        text: 'I understand your frustration with the ongoing noise issues. According to Burlington\'s noise ordinance (Section 21-12), construction work is restricted to the hours of 7:00 AM to 8:00 PM on weekdays and 8:00 AM to 6:00 PM on weekends. I\'ve escalated your complaint to our Code Enforcement office, and an officer will be dispatched to investigate within 24 hours. They will issue a warning for the first violation and can impose fines for subsequent violations. I\'ve also noted that this is a follow-up to your previous complaint (Case #NC-2025-0310), which will help establish a pattern of violations if the issue persists. You can expect a call from Code Enforcement today to confirm the details of your complaint.',
        timestamp: '2025-03-16T08:42:20.123Z'
      },
      ai_response: {
        text: 'I understand your frustration with the ongoing noise issues. According to Burlington\'s noise ordinance (Section 21-12), construction work is restricted to the hours of 7:00 AM to 8:00 PM on weekdays and 8:00 AM to 6:00 PM on weekends. I\'ve escalated your complaint to our Code Enforcement office, and an officer will be dispatched to investigate within 24 hours. They will issue a warning for the first violation and can impose fines for subsequent violations. I\'ve also noted that this is a follow-up to your previous complaint (Case #NC-2025-0310), which will help establish a pattern of violations if the issue persists. You can expect a call from Code Enforcement today to confirm the details of your complaint.',
        confidence_score: 0.785,
        timestamp: '2025-03-16T08:42:15.678Z',
        source: 'ordinance_database'
      },
      governance: {
        checked: true,
        results: {
          requires_human_review: true,
          flagged_content: false,
          compliance_status: 'compliant'
        },
        timestamp: '2025-03-16T08:42:15.678Z'
      },
      ticket_decision: {
        should_open: true,
        reason: 'Requires code enforcement follow-up',
        ticket_id: 't5jkYB4XR7GrvvBMnWTPRg==',
        timestamp: '2025-03-16T08:42:15.678Z'
      },
      metadata: {
        session_id: '9e1b3d5f-7a9c-1e3b-5d7f-9a1c3e5b7d9e',
        processing_time: 3245
      }
    } as Audit
  }
];

// Interface for service methods
export interface ConversationService {
  getConversations: () => Promise<ConversationItem[]>;
  getConversationById: (id: string) => Promise<ConversationItem | null>;
  getConversationStats: () => Promise<{
    total: number;
    avgResponseTime: number;
    avgConfidence: number;
    lowConfidenceCount: number;
  }>;
}

// Mock implementation of the service
class MockConversationService implements ConversationService {
  private conversations: ConversationItem[] = mockConversations;

  async getConversations(): Promise<ConversationItem[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.conversations;
  }

  async getConversationById(id: string): Promise<ConversationItem | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.conversations.find(conv => conv.id === id) || null;
  }

  async getConversationStats(): Promise<{
    total: number;
    avgResponseTime: number;
    avgConfidence: number;
    lowConfidenceCount: number;
  }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const total = this.conversations.length;
    const avgResponseTime = this.conversations.reduce((sum, conv) => sum + conv.responseTime, 0) / total;
    const avgConfidence = this.conversations.reduce((sum, conv) => sum + conv.confidence, 0) / total;
    const lowConfidenceCount = this.conversations.filter(conv => conv.confidence < 30).length;
    
    return {
      total,
      avgResponseTime,
      avgConfidence,
      lowConfidenceCount
    };
  }
}

// Export a singleton instance
export const conversationService: ConversationService = new MockConversationService(); 