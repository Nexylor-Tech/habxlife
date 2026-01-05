import SimplePage from "@/components/home/UI/SimplePage";
import { Shield } from "lucide-react";

export default function Privacy() {
    return (
        <SimplePage
            title="Privacy Policy"
            icon={<Shield className="w-6 h-6 text-emerald-600" />}
        >
            <h2 className="text-lg font-bold text-gray-900 mb-2">
                1. Information We Collect
            </h2>

            <h3 className="text-md font-bold text-gray-900 mb-2">
                1.1 Personal Information
            </h3>
            <p>
                We may collect personal information you voluntarily provide,
                including:
            </p>
            <ul>
                <li>Email address</li>
                <li>Account credentials</li>
            </ul>

            <h3 className="text-md font-bold text-gray-900 mb-2">
                1.2 Usage Data
            </h3>
            <p>
                We automatically collect usage data such as IP address, device
                information, browser type, pages visited, and timestamps.
            </p>

            <h3 className="text-md font-bold text-gray-900 mb-2">
                1.3 Habit & Goal Data
            </h3>
            <p>
                To provide personalized habit recommendations, we collect habit
                logs, completion status, goals, and related analytics.
            </p>

            <h3 className="text-md font-bold text-gray-900 mb-2">
                1.4 AI Processing
            </h3>
            <p>
                Anonymized habit data may be processed by third-party AI
                services to generate insights and recommendations.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                2. How We Use Your Information
            </h2>
            <ul>
                <li>Provide and maintain the Service</li>
                <li>Generate personalized habit insights</li>
                <li>Improve functionality and user experience</li>
                <li>Ensure security and prevent abuse</li>
                <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                3. Sharing of Information
            </h2>
            <p>
                We do not sell your personal data. We may share information with
                trusted service providers, AI partners, or legal authorities
                when required by law.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                4. Cookies and Tracking
            </h2>
            <p>
                We use cookies and similar technologies to maintain sessions,
                improve performance, and analyze usage.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                5. Data Retention
            </h2>
            <p>
                We retain personal data only as long as necessary to provide
                services and comply with legal requirements.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                6. Security
            </h2>
            <p>
                Reasonable technical and organizational safeguards are used to
                protect your data. However, no system is completely secure.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                7. Your Rights
            </h2>
            <p>
                You may request access, correction, or deletion of your data by
                contacting us at <strong>support@habx.life</strong>.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                8. Children’s Privacy
            </h2>
            <p>
                HabX is not intended for users under the age of 13. We do not
                knowingly collect data from children.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                9. Changes to This Policy
            </h2>
            <p>
                We may update this Privacy Policy from time to time. Continued
                use of the Service indicates acceptance of the updated policy.
            </p>
        </SimplePage>
    );
}
