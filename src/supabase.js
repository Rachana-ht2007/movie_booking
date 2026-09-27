import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bjhzvqbupsshvnzodvwe.supabase.co";
const supabaseKey = "sb_publishable_t-ZOdOxrLjpvXug1gJthjg_6I48g62_";

export const supabase = createClient(supabaseUrl, supabaseKey);
