import { motion } from "framer-motion";
import osconImage from "@/assets/oscon.png";
import fossBackstageImage from "@/assets/fossbackstage1.png";
import chaossConImage from "@/assets/chaosscon2.jpg";

const SpeakingEngagements = () => {
    const speakingEngagements = [
      {
        title: "Educating the next generation of open source contributors ",
        event: "FOSS BackStage 2026",
        date: "March 2026",
        location: "Virtual",
        description: "Share insights on how to educate the next generation of open source contributors and its benefits.",
        image: fossBackstageImage,
        href: "https://www.youtube.com/watch?v=0sssguCCNM0&list=PLq-odUc2x7i_CkIlwiKrIKXLdmQgFxhCL&index=46.",
      },
      {
        title: "Sustaining Open-Source Success",
        event: "The Open Source Analytics Communityt: OSA Con 2025",
        date: "November 5th, 2025",
        location: "Virtual",
        description: "Shared strategies for sustaining open-source projects.",
        image: osconImage,
        href: "https://www.youtube.com/watch?v=ls1FD5W6qtk",
      },
      {
        title: "Building Bridges into Open Source:How the CHAOSS Education Project is Empowering Contributors",
        event: "CHAOSSCon 2025",
        date: "August 13th, 2025",
        location: "Lagos, Nigeria",
        description: "Shared how the CHAOSS Education Project is empowering contributors to learn and contribute to open source projects.",
        image: chaossConImage,
        href: "https://www.youtube.com/watch?v=CUFMkyIz0f0&list=PL60k37cxI-HSaJBsRZafh08Uo_UPgAm6Y&index=9 ",
      },
      {
        title: "Open source contributors ",
        event: "CHAOSS Community Forum",
        date: "February 2023",
        location: "Remote",
        description: "Discussed how to lead community initiatives, run inclusive events, and measure community health.",
        image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHB1YmxpYyUyMHNwZWFraW5nfGVufDB8fDB8fHww",
        href: "https://example.com",
      },
      {
        title: "From Idea to Impact: Product Roadmaps",
        event: "Product Craft",
        date: "November 2022",
        location: "New York, USA",
        description: "Presented a roadmap framework for product teams working in fast-paced, cross-functional environments.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVibGljJTIwc3BlYWtpbmd8ZW58MHx8MHx8fDA%3D",
        href: "https://example.com",
      },
    ];
  return (
     <section id="public-engagements" className="container mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 mb-4">
            Speaking Engagements
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Sharing Ideas on Stage</h2>
          <p className="max-w-2xl text-muted-foreground mt-4">
            Recent presentations and workshops delivered to technical communities, open source events, and product teams.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {speakingEngagements.map((talk, i) => (
            <motion.div
              key={`${talk.title}-${talk.event}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300"
            >
              {talk.href ? (
                <a
                  href={talk.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <img
                    src={talk.image}
                    alt={`${talk.event} cover`}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">{talk.event}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {talk.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-muted/50 rounded-full">{talk.date}</span>
                      <span className="px-2 py-1 bg-muted/50 rounded-full">{talk.location}</span>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="block h-full">
                  <img
                    src={talk.image}
                    alt={`${talk.event} cover`}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">{talk.event}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {talk.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-1 bg-muted/50 rounded-full">{talk.date}</span>
                      <span className="px-2 py-1 bg-muted/50 rounded-full">{talk.location}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default SpeakingEngagements
