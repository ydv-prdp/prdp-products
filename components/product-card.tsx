import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { ShoppingCartIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"


interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <Card key={product.id} className="p-0 flex flex-col justify-between">
            <CardHeader className="p-0 relative">
                <Badge variant="secondary" className="absolute top-2 left-2">{product.category.name}</Badge>
                <Image
                    alt={product.title}
                    src={product.images[0]}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg"
                />
                <CardTitle className="p-4">{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-2">
                <p className="text-xl font-bold">${product.price}</p>
                <CardDescription className="">{product.description.slice(0,80)}...</CardDescription>
            </CardContent>
            <CardFooter className="p-4 flex justify-end">
                <Button className="cursor-pointer">
                    <ShoppingCartIcon className="size-4"/>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ProductCard