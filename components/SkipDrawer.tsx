'use client'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
} from './ui/drawer';
import { Button } from './ui/button';
import { SkipType } from '@/types/SkipType';
import {
  useSearchParams,
} from 'next/navigation';
import {
  useEffect,
  useState
} from 'react';

export const SkipDrawer = ({ skips }:
  { skips: SkipType[] }) => {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams();
  const skipSize = searchParams.get('skipSize');

  const selectedSkip = skips.find((skip) => skip.size === parseInt(skipSize ?? '0'));
  const totalCostWithVAT = selectedSkip?.price_before_vat ? (selectedSkip.price_before_vat * 1.2).toFixed(2) : null;

  useEffect(() => {
    if (selectedSkip) { setOpen(true) }
  }, [selectedSkip])

  if (!skipSize) return null;

  return (
    <Drawer
      open={open}
      onClose={() => setOpen(false)}>
      <DrawerOverlay />
      <DrawerContent
        className="bg-[#1e1e1e] text-white px-10">
        <DrawerHeader>
          <DrawerTitle
            className='text-white'>
            {`Skip Size: ${selectedSkip?.size} cubic yards`}
          </DrawerTitle>
          <DrawerDescription>
            {`Hire Period: ${selectedSkip?.hire_period_days} days`}
          </DrawerDescription>
        </DrawerHeader>
        {selectedSkip?.price_before_vat && (
          <div
            className="flex items-baseline mt-2 px-4">
            <span
              className="text-blue-500 text-lg items-baseline">
              {`£${selectedSkip?.price_before_vat}`}
            </span>
            <span
              className="text-gray-400 text-sm ml-2">
              {`per week`}
            </span>
          </div>
        )}
        <div
          className="px-4 py-2">
          {selectedSkip?.transport_cost !== null && (
            <div
              className="text-gray-400 text-sm">
              {`Transport Cost: £${selectedSkip?.transport_cost}`}
            </div>
          )}
          {selectedSkip?.per_tonne_cost !== null && (
            <div
              className="text-gray-400 text-sm">
              {`Per Tonne Cost: £${selectedSkip?.per_tonne_cost}`}</div>
          )}
          {totalCostWithVAT !== null && (
            <div className="text-blue-500 text-lg mt-2">
              {`Total Cost with VAT: £${totalCostWithVAT}`}
            </div>
          )}
        </div>
        <DrawerFooter
          className="flex flex-row justify-end gap-2 px-4 py-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className='bg-transparent text-blue-500 border-blue-500'>
            Back
          </Button>
          <Button
            className='bg-blue-500 text-white hover:bg-blue-700'>
            Continue
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
