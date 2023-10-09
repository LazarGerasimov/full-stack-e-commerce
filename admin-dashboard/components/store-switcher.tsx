"use client";

import { useState } from "react";
import { Store } from "@prisma/client";
import { useRouter, useParams } from 'next/navigation';
import { ChevronsUpDown, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";


import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Button } from "@/components/ui/button";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
    items: Store[];
};



export const StoreSwitcher = ({
    className,
    items = []
}: StoreSwitcherProps) => {

    const storeModal = useStoreModal();
    const params = useParams();
    const router = useRouter();

    const formattedItems = items.map((item) => ({
        label: item.name,
        value: item.id
    }));

    const currentStore = formattedItems.find((item) => item.value === params.storeId);

    const [open, setOpen] = useState(false);

    const onStoreSelect = (store: { value: string, label: string }) => {
        setOpen(false);
        router.push(`/${store.value}`);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    role="combobox"
                    className={cn("w-[200px] justify-between", className)}
                    // Accessibility features:
                    aria-expanded={open}
                    aria-aria-label="Select a store"
                >
                    <StoreIcon className="mr-2 h-4 w-4" />
                    Current Store
                    <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
        </Popover>
    )
};