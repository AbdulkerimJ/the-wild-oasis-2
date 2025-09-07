
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://apcvxzolwfnohlhwpmtg.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3Z4em9sd2Zub2hsaHdwbXRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NTg2MjYsImV4cCI6MjA3MTAzNDYyNn0.bKkOFGuIYCONkrxJuLsojp6Gw8uB_WNzGjASY_-E9GU";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
