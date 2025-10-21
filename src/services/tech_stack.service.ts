/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabaseServer } from ".";

export const TechStackService = {
  async getAll() {
    const { data, error } = await supabaseServer
      .from("tech_stack")
      .select("*")
      .order("order", { ascending: true });

    if (error) throw new Error(error.message);
    return data;
  },

  async create(stack: {
    name: string;
    category: string;
    icon_url?: string;
    order?: number;
  }) {
    const { data, error } = await supabaseServer
      .from("tech_stack")
      .insert(stack)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  async update(id: number, updates: Record<string, any>) {
    const { data, error } = await supabaseServer
      .from("tech_stack")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);
    return data;
  },

  async remove(id: number) {
    const { error } = await supabaseServer
      .from("tech_stack")
      .delete()
      .eq("id", id);

    if (error) throw new Error(error.message);
    return { success: true };
  },
};
