import SimplePage from "@/components/home/UI/SimplePage"
import { Users } from "lucide-react"
export default function About() {
    return (
        <SimplePage title="About HabX" icon={<Users className="w-6 h-6 text-emerald-600" />}>
            <p className="mb-4">
                HabX was born from a simple observation: most habit trackers are just glorified spreadsheets. They track what you do, but they don't help you understand <strong>why</strong> you do it, or how to do it better.
            </p>
            <p className="mb-4">
                Our mission is to leverage Artificial Intelligence to make personal growth accessible, measurable, and sustainable for everyone.
            </p>
            <p>
                We believe that small, consistent actions lead to massive transformation.
            </p>
        </SimplePage>
    )
}
