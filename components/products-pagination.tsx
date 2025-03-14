"use client"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface ProductsFilterProps {
    refetchProducts: () => Promise<void>;
}
const ProductsPagination = ({ refetchProducts }: ProductsFilterProps) => {
    const [offset, setOffset] = useQueryState("offset", parseAsInteger.withDefault(1));
    const handleOffsetChange = (value: number) => {
        setOffset(value)
        setTimeout(() => {
            refetchProducts();
        }, 300)
    }
    return (
        <Pagination>
            <PaginationContent>
                {offset > 1 && (
                    <>
                        <PaginationItem>
                            <Button
                                variant={"outline"}
                                onClick={() => handleOffsetChange(offset - 1)}
                            >
                                <ChevronLeft className="size-4" /> Previous
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button
                                variant={"outline"}
                                onClick={() => handleOffsetChange(offset - 1)}
                            >
                                {offset - 1}
                            </Button>
                        </PaginationItem>
                    </>
                )}
                  <PaginationItem>
                    <Button
                        variant={"outline"}
                        disabled
                    >
                        {offset}
                    </Button>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis/>
                </PaginationItem>
                <PaginationItem>
                    <Button
                        variant={"outline"}
                        onClick={() => handleOffsetChange(offset + 1)}
                    >
                    {offset + 1}
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default ProductsPagination