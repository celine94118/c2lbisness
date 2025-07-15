import PostDeploymentChecklist from "@/components/post-deployment-checklist"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <PostDeploymentChecklist />
      </div>
    </div>
  )
}
