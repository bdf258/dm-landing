import { Button } from '@/components/ui/button';
import {
  Mail,
  Users,
  Megaphone,
  FileSearch,
  Shield,
  ArrowRight,
  Tag,
  UserPlus,
  FolderPlus,
} from 'lucide-react';

// ============================================
// LANDING PAGE - And—Now House Style
// ============================================
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl font-serif tracking-tight">DearMP</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#mission" className="text-sm text-gray-400 hover:text-white transition-colors">Mission</a>
              <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-8">
            DearMP helps staffers respond more fully to constituents by automating the admin
          </h1>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl">
            Join constituency MPs who are already using DearMP
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-950 hover:bg-gray-200 font-light"
          >
            Request access
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <hr className="border-gray-800 max-w-5xl mx-auto" />

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-16">Features</p>

          {/* Feature 1: AI-assisted email triage */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
                  AI-assisted email triage
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Incoming emails are analysed to extract constituent details, identify the subject matter, and suggest appropriate actions. The system reduces the repetitive work of reading, categorising, and filing correspondence.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <FolderPlus className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-light mb-1">Assign to cases or create new ones</p>
                    <p className="text-sm text-gray-500 font-light">Emails are linked to existing cases or prompt the creation of new ones</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <UserPlus className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-light mb-1">Match or create constituents</p>
                    <p className="text-sm text-gray-500 font-light">Constituent records are matched automatically or created from extracted details</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center flex-shrink-0">
                    <Tag className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-light mb-1">Tag cases by topic</p>
                    <p className="text-sm text-gray-500 font-light">Housing, benefits, immigration, planning—cases are tagged for easier filtering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 mb-24" />

          {/* Feature 2: Campaign identification */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
                  Automatic campaign identification
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  When constituents write as part of an organised campaign, the system recognises the pattern. Campaign emails are grouped together, allowing your office to respond appropriately without processing each one individually.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gray-700 flex items-center justify-center">
                  <Megaphone className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 mb-24" />

          {/* Feature 3: Hansard integration (Coming soon) */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Coming soon</p>
                <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
                  Hansard integration
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                  Written questions relevant to a case's subject matter will be surfaced automatically. When a constituent writes about housing benefit delays, you'll see what questions have already been asked in Parliament on that topic.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-gray-700 flex items-center justify-center">
                  <FileSearch className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 mb-24" />

          {/* Feature 4: Permissions */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
                  Permissions for your team
                </h2>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Different roles have different needs. Office managers oversee all casework. Staffers manage their assigned cases. Interns can view and assist without making changes they shouldn't.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg">
                  <Shield className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-light">Office managers</p>
                    <p className="text-sm text-gray-500 font-light">Full access to all cases and settings</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg">
                  <Users className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-light">Staffers</p>
                    <p className="text-sm text-gray-500 font-light">Manage assigned cases and constituents</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-lg">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-white font-light">Interns</p>
                    <p className="text-sm text-gray-500 font-light">View cases and assist with triage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-5xl mx-auto" />

      {/* Mission Section */}
      <section id="mission" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">Mission</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8 leading-relaxed">
            MPs should be able to respond effectively to the people they represent
          </h2>
          <div className="space-y-6 text-gray-400 font-light leading-relaxed">
            <p>
              Constituent casework is central to the work of a Member of Parliament. When someone writes to their MP about a problem with housing, benefits, or immigration, they deserve a considered response. But the volume of correspondence can make this difficult.
            </p>
            <p>
              Parliamentary offices often rely on systems designed for other purposes, or no system at all. Staff spend hours on administrative tasks—copying details between applications, searching for previous correspondence, categorising emails by hand.
            </p>
            <p>
              DearMP exists to handle the administrative burden so that staffers can focus on what matters: understanding constituent problems and helping to resolve them.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-5xl mx-auto" />

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-8">
            Interested in DearMP for your office?
          </h2>
          <p className="text-gray-400 font-light mb-12 max-w-xl mx-auto">
            We're working with a small number of parliamentary offices. If you'd like to learn more, get in touch.
          </p>
          <Button
            size="lg"
            className="bg-white text-gray-950 hover:bg-gray-200 font-light"
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-serif">DearMP</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} DearMP
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
