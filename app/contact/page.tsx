import SimplePage from "@/components/home/UI/SimplePage"
import { Mail } from "lucide-react"
export default function Contact() {
    return (
        <SimplePage title="Contact Us" icon={<Mail className="w-6 h-6 text-emerald-600" />}>
            <p className="mb-6">We'd love to hear from you. Whether you have a question about features, pricing, or need support, our team is ready to answer all your questions.</p>

            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Support Email</h3>
                    <p className="text-emerald-600">no-reply@habx.life</p>
                </div>
            </div>
        </SimplePage>
    )
}