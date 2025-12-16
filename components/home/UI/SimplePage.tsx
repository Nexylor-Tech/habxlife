interface SimplePageProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export default function SimplePage({ title, children, icon }: SimplePageProps) {
    return (
        <div className="min-h-screen bg-gray-50 pt-20 pb-20 animate-fade-in">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex items-center mb-8 pb-8 border-b border-gray-100">
                        {icon && <div className="bg-emerald-100 p-3 rounded-xl mr-4">{icon}</div>}
                        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                    </div>
                    <div className="prose prose-emerald max-w-none text-gray-600">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}