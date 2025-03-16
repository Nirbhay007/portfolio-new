"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface BlogSearchProps {
  categories: string[];
}

export function BlogSearch({ categories }: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const currentCategory = searchParams.get("category") || "All";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10"
            value={query}
            onChange={(e) => {
              router.push(`/blog?${createQueryString("q", e.target.value)}`);
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={currentCategory === "All" ? "default" : "outline"}
            onClick={() => {
              router.push(`/blog?${createQueryString("category", "All")}`);
            }}
          >
            All
          </Button>

          {categories.map((category) => (
            <Button
              key={category}
              variant={currentCategory === category ? "default" : "outline"}
              onClick={() => {
                router.push(`/blog?${createQueryString("category", category)}`);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 