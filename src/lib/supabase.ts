import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fppbmzkxxmtxhimwicoj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwcGJtemt4eG10eGhpbXdpY29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MDg0MzAsImV4cCI6MjA0NTE4NDQzMH0.K2YI3Q12tmE1AuVNcNCEj8bFNOV2nxhsT_jp8kFZvew';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: {
    schema: 'public'
  },
  auth: {
    persistSession: false
  }
});