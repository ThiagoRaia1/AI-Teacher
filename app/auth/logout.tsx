import { useEffect } from "react";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";
import { pageNames } from "../../utils/pageNames";
import Carregando from "../components/Carregando";

export default function Logout() {
  useEffect(() => {
    const logout = async () => {
      await supabase.auth.signOut();

      router.replace(pageNames.main); // redireciona para login
    };
    logout();
  }, []);

  return <Carregando />;
}
