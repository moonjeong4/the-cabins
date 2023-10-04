import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ubetuyatdfoduqxoolnw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZXR1eWF0ZGZvZHVxeG9vbG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzOTIzMzYsImV4cCI6MjAxMDk2ODMzNn0.27cleA7AzZc7y3vS8l0t73-_E1KGXulfSTgzLZ6V18o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
