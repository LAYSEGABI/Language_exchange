import { createClient } from '@supabase/supabase-js'

// Você encontra essas chaves nas configurações do Supabase (Project Settings > API)
const supabaseUrl = 'https://ndiadfadpicgppzvlynk.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWFkZmFkcGljZ3BwenZseW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTc4NzUsImV4cCI6MjA5MjM3Mzg3NX0.ci-UIh3d2v4ghgIjrZ6QcDMTbw9oripFb4DOV_XEeno'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)