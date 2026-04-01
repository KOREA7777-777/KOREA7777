const SUPABASE_URL = 'https://wnkogspcwjvwulhlupml.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indua29nc3Bjd2p2d3VsaGx1cG1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwMjQ1NTUsImV4cCI6MjA5MDYwMDU1NX0.pOSOd48fMJLL65ePp-BGnfaKFHsMjg0IDih_cZXWqtc';

window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 