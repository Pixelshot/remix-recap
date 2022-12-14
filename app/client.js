import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://klwylnmzkmvbrraqtade.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsd3lsbm16a212YnJyYXF0YWRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NDAyOTMsImV4cCI6MTk4NjQxNjI5M30.L4s1JtEByxopKtpnIZ8uzStaOouprbCPyrSc9z1dMBQ'
);
