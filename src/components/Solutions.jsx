import { ShieldCheck, Lock, Network, Radar } from 'lucide-react'

const solutions = [
  {
    icon: ShieldCheck,
    title: 'Threat Prevention',
    desc: 'AI-powered detection that blocks malware, phishing, and ransomware before impact.'
  },
  { icon: Lock, title: 'Identity & Access', desc: 'Zero-trust access controls, SSO, and MFA for teams and partners.' },
  { icon: Network, title: 'Network Security', desc: 'Segment, monitor, and secure traffic across cloud and on‑prem.' },
  { icon: Radar, title: 'SIEM & Observability', desc: 'Correlate logs in real-time with automated incident response.' }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Comprehensive protection, simplified</h2>
          <p className="mt-3 text-gray-600">Everything you need to defend your organization from endpoint to cloud.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
