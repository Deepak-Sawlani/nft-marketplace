import { Menu } from "lucide-react";
import { Button } from "./components/ui/button";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  const trendingArtworks = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1655255201488-766303d720a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY2VyYW1pY3xlbnwxfHx8fDE3NjY5MDUwMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@alexchen",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1657643101593-945e6a29b6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwc2N1bHB0dXJlfGVufDF8fHx8MTc2NjkwNTAzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@goldstudio",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1646442502085-c8d6d3f19922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3BoZXJlJTIwYXJ0fGVufDF8fHx8MTc2NjkwNTAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@darkarts",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1759395162380-3f979d9272ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHNjdWxwdHVyZSUyMGFydHxlbnwxfHx8fDE3NjY4MjY5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@sculpture3d",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1743965127308-fa66216057b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGFydHxlbnwxfHx8fDE3NjY4MjEzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@geometryart",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1764258560099-39e8297ea0f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwbmVvbnxlbnwxfHx8fDE3NjY5MDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "@neonwave",
    },
  ];

  const popularArtists = [
    {
      id: 1,
      name: "@ebisstudio",
      image:
        "https://images.unsplash.com/photo-1746309820773-7bd3498c36fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFydGlzdHxlbnwxfHx8fDE3NjY5MDUwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "@artflow",
      image:
        "https://images.unsplash.com/photo-1754638504964-880857928e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFzdHJvbmF1dCUyMGFydHxlbnwxfHx8fDE3NjY5MDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "@johncarter",
      image:
        "https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwM2R8ZW58MXx8fHwxNzY2OTA1MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "@evelynpatel",
      image:
        "https://images.unsplash.com/photo-1746309820773-7bd3498c36fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFydGlzdHxlbnwxfHx8fDE3NjY5MDUwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#2a2a2a] border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2 hover:bg-gray-700 rounded">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="absolute left-1/2 transform -translate-x-1/2">
            Untitled
          </h1>
        </div>
      </header>

      {/* Login Section */}
      <div className="px-4 py-4">
        <Button
          variant="ghost"
          className="w-full text-left text-gray-300 hover:text-white justify-start px-0"
        >
          Log in or create account
        </Button>
      </div>

      {/* Main Content */}
      <div className="px-4 pb-20">
        {/* Featured NFT */}
        <section className="mb-6">
          <div className="relative bg-gradient-to-b from-purple-900/50 to-purple-800/30 rounded-2xl overflow-hidden p-6">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634618948828-aa7b3d0724fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwM2R8ZW58MXx8fHwxNzY2OTA1MDMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured NFT"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl mb-2">Discover Rare</h2>
              <h3 className="text-2xl mb-4">
                Collections Of Art & NFT's
              </h3>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm">
                Explore
              </button>
              <div className="flex gap-4 mt-6">
                <div className="text-center">
                  <div>28k+</div>
                </div>
                <div className="text-center">
                  <div>30k+</div>
                </div>
                <div className="text-center">
                  <div>15k+</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bitcoin Art Work */}
        <section className="mb-6">
          <div className="bg-gradient-to-b from-purple-900/50 to-purple-800/30 rounded-2xl overflow-hidden">
            <div className="flex">
              <div className="w-1/2 p-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1754638504964-880857928e64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGFzdHJvbmF1dCUyMGFydHxlbnwxfHx8fDE3NjY5MDUwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bitcoin Art"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <div className="w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-xl mb-2">Bitcoin</h3>
                <h4 className="text-xl mb-4">Art Work</h4>
                <div className="flex gap-2 mb-3">
                  <div className="bg-purple-600/50 px-2 py-1 rounded text-xs">
                    12:15 h
                  </div>
                  <div className="bg-purple-600/50 px-2 py-1 rounded text-xs">
                    57:11 m
                  </div>
                  <div className="bg-purple-600/50 px-2 py-1 rounded text-xs">
                    23:18 s
                  </div>
                </div>
                <button className="bg-white text-black px-4 py-2 rounded-full text-sm w-fit">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trending This Week */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl">Trending This Week</h3>
            <button className="text-purple-400 text-sm">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {trendingArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="bg-purple-900/30 rounded-xl overflow-hidden"
              >
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.artist}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <p className="text-sm text-gray-400">
                    {artwork.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Artists */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl">Popular Artists</h3>
            <button className="text-purple-400 text-sm">
              View All
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {popularArtists.map((artist) => (
              <div key={artist.id} className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden border-2 border-purple-500">
                  <ImageWithFallback
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-300">
                  {artist.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community */}
        <section className="mb-6">
          <div className="relative bg-gradient-to-br from-purple-800 to-purple-600 rounded-2xl overflow-hidden p-6 min-h-[200px]">
            <div className="absolute inset-0 opacity-30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1611794501034-13369f948303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwb2NlYW4lMjB3YXZlc3xlbnwxfHx8fDE3NjY5MDUwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl mb-2">
                Join The Community
              </h3>
              <p className="text-sm text-gray-200 mb-4">
                And Get The Latest NFT Collections
              </p>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </section>

        {/* NFT Page indicator */}
        <div className="flex justify-center gap-2 py-4">
          <div className="text-purple-400 text-sm">
            NFT Page
          </div>
        </div>
      </div>
    </div>
  );
}