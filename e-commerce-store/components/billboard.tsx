import { Billboard as BillboardType } from "@/types";


interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div>Billboard</div>
    )
}

export default Billboard