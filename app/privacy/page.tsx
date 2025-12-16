import SimplePage from "@/components/home/UI/SimplePage"
import { Shield } from "lucide-react"

export default function Privacy() {
    return (
        <SimplePage title="Privacy Policy" icon={<Shield className="w-6 h-6 text-emerald-600" />}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Data Collection</h3>
            <p className="mb-4">We collect information to provide better services to all our users. This includes: standard analytics, habit data you input, and account information.</p>

            <h3 className="text-lg font-bold text-gray-900 mb-2">AI Processing</h3>
            <p className="mb-4">Your habit data is processed by our AI algorithms to generate insights. This data is anonymized and encrypted. We do not sell your personal data to third parties.</p>
        </SimplePage>
    )
}