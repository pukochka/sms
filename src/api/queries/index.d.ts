/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

// ----------------------------------------------------------------------
// |                                                                    |
// |                        Объединение запросов                        |
// |                                                                    |
// ----------------------------------------------------------------------

declare type SMSQueries = SMSCommonQueries &
  SMSMultiQueries &
  SMSServiceQueries;

declare type SMSParams<P extends keyof SMSQueries> = SMSQueries[P];
