import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 animate-fade-in-up">
              AI-Powered Code Reviews with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                CodeTide
              </span>
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in-up [animation-delay:200ms]">
              Automate your code reviews with our intelligent AI bot. Seamlessly integrated with GitHub and GitLab, 
              it helps teams ship better code faster while maintaining high quality standards.
            </p>
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in-up [animation-delay:400ms]">
              <a
                href="https://codetide-ebcuh3bkeueggyfh.canadacentral-01.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors hover:scale-105 transform duration-200 cursor-pointer"
              >
                Get Started
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 animate-fade-in-up [animation-delay:600ms]">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">G</div>
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">U</div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 10,000+ developers worldwide
              </p>
            </div>
          </div>
          <div className="flex-1 animate-float">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="https://cliperact.b-cdn.net/codetide/24_05_23_03.jpg"
                alt="AI Code Review Assistant"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 animate-fade-in-up">Why Developers Love CodeTide</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Intelligent Code Analysis",
              description: "AI-powered review that catches bugs, security issues, and suggests improvements in real-time.",
              icon: "/code-analysis.svg"
            },
            {
              title: "Seamless Integration",
              description: "Works natively with GitHub and GitLab. No complex setup required.",
              icon: "/integration.svg"
            },
            {
              title: "Time-Saving Automation",
              description: "Reduce review time by up to 70% while maintaining code quality standards.",
              icon: "/automation.svg"
            }
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 mb-6 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Connect Your Repository",
                description: "Link your GitHub or GitLab repository with a single click.",
                icon: "/connect-repo.svg"
              },
              {
                step: "2",
                title: "Configure Review Rules",
                description: "Set up your team's coding standards and review preferences.",
                icon: "/configure-rules.svg"
              },
              {
                step: "3",
                title: "Automated Reviews",
                description: "Our AI bot automatically reviews every PR, providing detailed feedback and suggestions.",
                icon: "/automated-review.svg"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="hidden md:block w-16 h-16">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 animate-fade-in-up">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "70% Faster Reviews",
              description: "Reduce review time while maintaining quality",
              icon: "/speed.svg"
            },
            {
              title: "95% Bug Detection",
              description: "Catch issues before they reach production",
              icon: "/bug-detection.svg"
            },
            {
              title: "24/7 Availability",
              description: "Get instant feedback anytime, anywhere",
              icon: "/availability.svg"
            },
            {
              title: "Team Collaboration",
              description: "Improve team knowledge sharing and learning",
              icon: "/collaboration.svg"
            }
          ].map((benefit, index) => (
            <div key={index} className="group">
              <div className="h-full p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mb-6 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                    className="object-contain text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 animate-fade-in-up">Seamless Integration</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
          <div className="group">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/github-logo.svg"
                  alt="GitHub"
                  width={96}
                  height={96}
                  className="text-gray-900 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6 text-gray-900">GitHub</h3>
          </div>
          <div className="text-2xl font-bold text-gray-300">+</div>
          <div className="group">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/gitlab-logo.svg"
                  alt="GitLab"
                  width={96}
                  height={96}
                  className="text-gray-900 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6 text-gray-900">GitLab</h3>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-blue-700 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Supercharge Your Code Reviews?</h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up [animation-delay:200ms]">
            Join 10,000+ developers who are already saving 70% of their review time with CodeTide.
            <br />
            <span className="text-blue-100">Start your free trial today - no credit card required.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up [animation-delay:400ms]">
            <a
              href="https://codetide-ebcuh3bkeueggyfh.canadacentral-01.azurewebsites.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 font-semibold text-lg cursor-pointer"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
