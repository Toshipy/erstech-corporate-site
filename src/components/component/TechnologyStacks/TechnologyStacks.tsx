import React from 'react'
import { Typography, ScrollArea } from '@/components/index'
import {
  SiAmazonwebservices,
  SiAtlassian,
  SiCloudflare,
  SiCss3,
  SiDocker,
  SiFigma,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMiro,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiSlack,
  SiSpringboot,
  SiTerraform,
  SiTrello,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons'

export const TechnologyStacks = () => {
  return (
    <ScrollArea className="h-full w-full bg-background px-12">
      <div className="px-12 pt-12">
        <Typography variant="4xl">TechnologyStacks</Typography>
        <div className="mt-4 grid grid-cols-2 gap-6 py-6">
          <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
            <Typography
              variant="xl"
              className="mb-4 text-xl font-bold text-white"
            >
              Languages
            </Typography>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <SiHtml5 className="text-white" size={40} />
                <span className="mt-2 text-white">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCss3 className="text-white" size={40} />
                <span className="mt-2 text-white">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPython className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGo className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Go</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
            <Typography
              variant="xl"
              className="mb-4 text-xl font-bold text-white"
            >
              Framework
            </Typography>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <SiReact className="text-white" size={40} />
                <span className="mt-2 text-white">React</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-white" size={40} />
                <span className="mt-2 text-white">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNodedotjs className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSpringboot className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">SpringBoot</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
            <Typography
              variant="xl"
              className="mb-4 text-xl font-bold text-white"
            >
              Infrastructure
            </Typography>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <SiAmazonwebservices className="text-white" size={40} />
                <span className="mt-2 text-white">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <SiGooglecloud className="text-white" size={40} />
                <span className="mt-2 text-white">Google Cloud</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTerraform className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Terraform</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDocker className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Docker</span>
              </div>
              <div className="flex flex-col items-center">
                <SiKubernetes className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Kubernetes</span>
              </div>
              <div className="flex flex-col items-center">
                <SiVercel className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Vercel</span>
              </div>
              <div className="flex flex-col items-center">
                <SiCloudflare className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Cloudflare</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-4 shadow-lg">
            <Typography
              variant="xl"
              className="mb-4 text-xl font-bold text-white"
            >
              Others
            </Typography>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <SiGithub className="text-white" size={40} />
                <span className="mt-2 text-white">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <SiFigma className="text-white" size={40} />
                <span className="mt-2 text-white">Figma</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNotion className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Notion</span>
              </div>
              <div className="flex flex-col items-center">
                <SiAtlassian className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Atlassian</span>
              </div>
              <div className="flex flex-col items-center">
                <SiSlack className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Slack</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMiro className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Miro</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTrello className="bg-none text-white" size={40} />
                <span className="mt-2 text-white">Trello</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
