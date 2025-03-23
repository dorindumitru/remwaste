import React from 'react';
import Image from 'next/image';
import { SkipType } from '@/types/SkipType';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { skipSizeImages } from '@/constants/skipSizeImages';
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';

type SkipSizeKeys = keyof typeof skipSizeImages;

export const SkipCard = ({ skip, selectedSkip }:
  { skip: SkipType, selectedSkip: number }) => {
  const totalCostWithVAT = skip.price_before_vat !== null ? (skip.price_before_vat * 1.2).toFixed(2) : null;
  const skipImageKey = `Yard${skip.size}` as SkipSizeKeys;
  const skipImage = skipSizeImages[skipImageKey]?.image || 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800';

  const isSelected = skip.size === selectedSkip;

  return (
    <Link
      className='w-full cursor-pointer'
      href={{ pathname: "/", query: { skipSize: skip.size } }}
      passHref>
      <Card
        className={`bg-[#1e1e1e] text-white relative pt-1 px-1 w-full sm:max-w-sm md:max-w-md lg:max-w-lg sm:w-auto ${isSelected ? 'border-2 border-blue-500' : ''}`}> {/* Add border if selected */}
        <div className="relative">
          <Image
            src={skipImage}
            alt="Skip"
            layout="responsive"
            width={800}
            height={320}
            className="rounded-t-md object-cover" />
          {!skip.allowed_on_road && (
            <Badge
              className="absolute bottom-2 left-2 bg-yellow-500 text-black">
              <TriangleAlert />
              Not allowed on road
            </Badge>
          )}
          <Badge
            className="absolute top-2 right-2 bg-blue-500 text-white">
            {`${skip.size} Yards`}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle>
            {`Skip Size: ${skip.size} cubic yards`}
          </CardTitle>
          <CardDescription>
            {`Hire Period: ${skip.hire_period_days} days`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {skip.price_before_vat !== null && (
            <div
              className="flex items-baseline mt-2">
              <p
                className="text-blue-500 text-lg">
                {`£${skip.price_before_vat}`}
              </p>
              <p
                className="text-gray-400 text-sm ml-2">
                {`per week`}
              </p>
            </div>
          )}
          {skip.transport_cost !== null && (
            <p
              className="text-gray-400 text-sm">
              {`Transport Cost: £${skip.transport_cost}`}
            </p>
          )}
          {skip.per_tonne_cost !== null && (
            <p
              className="text-gray-400 text-sm">
              {`Per Tonne Cost: £${skip.per_tonne_cost}`}
            </p>
          )}
          {totalCostWithVAT !== null && (
            <p
              className="text-blue-500 text-lg mt-2">
              {`Total Cost with VAT: £${totalCostWithVAT}`}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button
            className="mt-4 bg-blue-500 text-white hover:bg-blue-700 w-full cursor-pointer">
            Select This Skip →
          </Button>
        </CardFooter>
      </Card>
    </Link >
  );
}
