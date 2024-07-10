import { Button } from "@/components/ui/button";
import Link from "next/link";


const CourcesPage = () =>{
    return(
        <div className="p-6">
            <Link href="/teacher/create">
            <Button>
                Vew Cources
            </Button>
            
            </Link>
        </div>
    )
}
export default CourcesPage;