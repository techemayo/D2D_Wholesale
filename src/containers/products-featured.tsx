import SectionHeader from "@components/common/section-header";
import ProductOverlayCard from "@components/product/product-overlay-card";
import ProductOverlayCardBackup from "@components/product/product-overlay-card-backup";

import { useFeaturedProductsQuery } from "@framework/product/get-all-featured-products";
import Alert from "@components/ui/alert";
import { Product } from "@framework/types";

interface ProductsProps {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	limit?: number;
	limt?: number;
	variant?: "left" | "center" | "combined" | "flat";
}

const ProductsFeatured: React.FC<ProductsProps> = ({
	sectionHeading,
	categorySlug,
	className = "mb-12 md:mb-14 xl:mb-16",
	variant = "left",
	limit = 4,
	limt = 1,
}) => {
	const { data, error } = useFeaturedProductsQuery({
		limit: limit,
	});
 
	return (
		<div className={className}>
			<SectionHeader
				sectionHeading={sectionHeading}
				categorySlug={categorySlug}
			/>
			{error ? (
				<Alert message={error?.message} />
			) : (
				<div className="grid grid-cols-7 grid-rows-1 gap-3 md:gap-5 xl:gap-7">
					<div className=" grid-cols-8 grid-rows-1 gap-3 md:gap-5 xl:gap-7">
					
					{data?.slice(0, limt).map((product: Product, idx: number) => (
						<ProductOverlayCardBackup
							key={`product--key${product.id}`}
							product={product}
							variant={variant}
							index={idx}
						/>
						
					))}
				</div>
					{data?.slice(0, limit=3).map((product: Product, idx: number) => (
						<ProductOverlayCard
							key={`product--key${product.id}`}
							product={product}
							variant={variant}
							index={idx}
						/>
						
					))}
				</div>
				
			)}
		</div>
	);
	
};

export default ProductsFeatured;
