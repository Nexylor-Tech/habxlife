import SimplePage from "@/components/home/UI/SimplePage"
import { Shield } from "lucide-react"

export default function Terms() {
    return (
        <SimplePage title="Terms & Conditions" icon={<Shield className="w-6 h-6 text-emerald-600" />}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h3>
            <p className="mb-4">By accessing and using HabX, you accept and agree to be bound by the terms and provision of this agreement.</p>
            <p>Will be provided upon the launch of the app.</p>

            {/* <h3 className="text-lg font-bold text-gray-900 mb-2">2. Disclaimer</h3>
            <p></p> */}
        </SimplePage>
    )
} 