import SimplePage from "@/components/home/UI/SimplePage";
import { Shield } from "lucide-react";

export default function Terms() {
    return (
        <SimplePage
            title="Privacy Policy"
            icon={<Shield className="w-6 h-6 text-emerald-600" />}
        >
            <p className="mb-4">
                These Terms & Conditions ("Terms") govern your use of the HabX
                website and services ("Service"). By accessing or using HabX,
                you agree to these Terms.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                1. Eligibility
            </h2>
            <p>
                You must be at least 13 years old to use the Service and capable
                of entering into a binding agreement.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                2. Account Registration
            </h2>
            <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities under your account.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                3. Use of the Service
            </h2>
            <ul>
                <li>Use the Service only for lawful purposes</li>
                <li>Do not interfere with security or functionality</li>
                <li>Do not attempt unauthorized access</li>
            </ul>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                4. Subscriptions & Payments
            </h2>
            <p>
                Certain features may require payment. All payments are handled
                through authorized payment providers. Fees are non-refundable
                unless stated otherwise.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                5. Intellectual Property
            </h2>
            <p>
                All content, trademarks, and software are owned by HabX or its
                licensors. Unauthorized use is prohibited.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                6. User Content
            </h2>
            <p>
                You retain ownership of content you submit but grant HabX a
                license to use it solely to operate and improve the Service.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                7. Third-Party Services
            </h2>
            <p>
                HabX may integrate with third-party services, including AI
                providers. Their use may be governed by separate terms.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                8. Disclaimer
            </h2>
            <p>
                The Service is provided "as is" without warranties of any kind.
                HabX does not guarantee results, accuracy, or uninterrupted
                availability.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                9. Limitation of Liability
            </h2>
            <p>
                To the maximum extent permitted by law, HabX is not liable for
                indirect, incidental, or consequential damages.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                10. Indemnification
            </h2>
            <p>
                You agree to indemnify and hold HabX harmless from claims
                arising from your use of the Service or violation of these
                Terms.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                11. Termination
            </h2>
            <p>
                We reserve the right to suspend or terminate access to the
                Service for any violation of these Terms.
            </p>

            <h2 className="text-lg font-bold text-gray-900 mb-2">
                12. Changes to Terms
            </h2>
            <p>
                We may update these Terms from time to time. Continued use of
                the Service constitutes acceptance of the revised Terms.
            </p>
        </SimplePage>
    );
}
