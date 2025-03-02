"use client";
import React, { useState, useMemo } from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ProductsProps {
  limit?: number;
  showLoadMore?: boolean;
  showFilter?: boolean;
}

export const Products = ({ limit, showLoadMore = false, showFilter = true }: ProductsProps) => {
  const [displayCount, setDisplayCount] = useState(4);
  const [selectedStack, setSelectedStack] = useState<string>();

  // Get unique tech stacks
  const uniqueStacks = useMemo(() => {
    const stacks = products.flatMap(product => product.stack || []);
    return Array.from(new Set(stacks));
  }, []);

  // Updated filtering logic for single selection
  const filteredProducts = useMemo(() => {
    if (!selectedStack || selectedStack === "all") return products;
    return products.filter(product => 
      product.stack?.includes(selectedStack)
    );
  }, [selectedStack]);

  const displayedProducts = useMemo(() => {
    const filtered = filteredProducts;
    if (showLoadMore) {
      return filtered.slice(0, displayCount);
    }
    if (limit) {
      return filtered.slice(0, limit);
    }
    return filtered;
  }, [filteredProducts, showLoadMore, limit, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 4);
  };

  return (
    <div className="mt-10">
      {showFilter && (
        <div className="mb-4 w-[200px]">
          <Select
            value={selectedStack}
            onValueChange={(value) => {
              setSelectedStack(value);
              setDisplayCount(4); // Reset display count when filter changes
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by stack" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {uniqueStacks.map((stack) => (
                <SelectItem key={stack} value={stack}>
                  {stack}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid grid-cols-1 gap-10">
        {displayedProducts.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 p-4"
            >
              <div className="w-[250px] h-[150px] flex-shrink-0">
                <Image
                  src={product.thumbnail}
                  alt="thumbnail"
                  height={200}
                  width={200}
                  className="rounded-md object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl text-gray-900">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs md:text-xs lg:text-xs bg-gray-100 px-2 py-1 rounded-sm text-gray-900"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {showLoadMore && displayCount < filteredProducts.length && (
        <div className="flex hover:cursor-pointer hover:scale-105 justify-center mt-10">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleLoadMore}
            className="inline-flex items-center gap-1 group/button rounded-sm focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
};
