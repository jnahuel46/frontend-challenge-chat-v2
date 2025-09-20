# How I Built This Thing

## Time Breakdown
**About 3 hours total** (honestly could've been more if I kept tweaking things...)
- **Late night coding: 2 hours** - Getting the basics working, fighting with CSS as usual
- **Morning coffee session: 1 hour** - Making it pretty with design tokens and writing docs

## What Actually Got Done

### The Good Stuff ✅
- **UI that doesn't suck**: Tried my best to match the Figma design pixel-perfect (well, close enough)
- **Two modes**: Landing page where you pick between chat or voice - seemed obvious but wasn't in the original design
- **Speaking indicators**: You can actually tell when someone's talking vs when Iris is responding
- **Works on your phone**: Started mobile-first because let's be real, everyone's on mobile
- **Design tokens**: Finally organized all those random colors and sizes that were scattered everywhere
- **State management**: Zustand because Redux gives me nightmares
- **A11y stuff**: Added the ARIA labels and keyboard nav that we always forget about

### Tech Choices
- **React + TypeScript**: Because types save lives (and debugging time)
- **SCSS Modules**: Keeps styles from leaking everywhere like a broken faucet
- **Atomic Design**: Small pieces → bigger pieces → actual pages (makes sense when you think about it)
- **Custom animations**: Those orbs needed to feel alive, not robotic
- **Mobile-first**: Desktop is just mobile with more space, right?

## The Fun Problems I Had to Solve

### Making Orbs Actually Look Like They're Breathing
Turns out smooth animations are harder than they look. Had to mess around with CSS keyframes until they felt natural - scale, rotation, the works. The speaking states needed to override the idle breathing without looking janky.

### Navigation That Doesn't Suck on Both Desktop and Mobile
One navigation component, two completely different layouts. Bottom bar on mobile (because thumbs), sidebar on desktop (because screen real estate). CSS media queries are still magic to me sometimes.

### Not Copy-Pasting the Same Colors Everywhere
Created a design token system because I was tired of seeing `#18181B` scattered across 47 different files. Now it's `$color-zinc-dark` and my future self will thank me.

## What I'd Do With More Time (aka the wishlist)

### Actually Test This Thing (4-6 hours)
Would love to add proper tests because "it works on my machine" isn't good enough. Jest + React Testing Library for the components, some integration tests to make sure clicking buttons actually does stuff, and maybe even visual regression tests so I stop breaking the design by accident.

### Hook It Up to Real AI (6-8 hours)
Right now it's all fake responses. Would be cool to integrate OpenAI's API with actual streaming, add voice-to-text with the Web Speech API, and build proper error handling for when the internet inevitably fails.

### Make the Animations Actually Good (3-4 hours)
My CSS animations are okay but Framer Motion would make them buttery smooth. Plus all those micro-interactions that make an app feel polished - button hover states, loading animations, orbs that react to actual voice input.

### Add All the Features I Didn't Have Time For (5-7 hours)
- Message search (because scrolling through chat history sucks)
- Edit/delete messages (for when you say something dumb)
- File uploads (images, documents, whatever)
- Proper theme switching (not just the placeholder I have now)
- Keyboard shortcuts (for the power users)

### Clean Up My Code (2-3 hours)
Error boundaries so the whole app doesn't crash when something breaks, extract some custom hooks to make things reusable, and optimize performance because I definitely forgot some React.memo's in there.

## Key Assumptions I Made

### Landing Page
The Figma didn't show how users would pick between chat and voice modes, so I added a welcome screen. Seemed like the obvious UX flow - let people choose their preferred interaction style upfront.

### Voice Mode Design
Had to interpret what "voice interaction" meant. Went with dual orbs (AI + user) with microphone controls and visual feedback. The breathing animations make it feel alive, speaking states show who's talking.

### Mobile Experience
Assumed most people would use this on mobile, so designed for that first. Bottom navigation for thumbs, sidebar for desktop when you have more screen space.

### Visual Chat States
Made it super clear when someone's typing vs when Iris is responding. Added the little orb in the chat header and status indicators because context is everything.

### Theme System
Assumed dark mode was primary (looks cooler, easier on the eyes), but built the token system to support light mode later.

## How to Run This Thing

```bash
# Clone the repo
git clone [your-repo-url]

# Install dependencies (using pnpm because it's faster)
pnpm install

# Start the dev server
pnpm run dev

# Open http://localhost:5173 in your browser
```

That's it! Should work on any modern browser. Built with Vite so hot reload is lightning fast.

## Technical Decisions & Reasoning

### PNPM over npm/yarn
Chose PNPM for its performance benefits - faster installs and better disk space efficiency. The strict dependency resolution helps prevent issues down the line, and it scales well for larger projects.

### Zustand over Redux/Context
For this app's scope, Zustand was the sweet spot. Much less boilerplate than Redux while still providing clean state management. The TypeScript integration is smooth, and it handles our navigation and chat state perfectly without overengineering.

### SCSS Modules over Tailwind
Went with SCSS Modules to build a proper design token system. This gives us centralized values for consistency across components, scoped styles that don't leak, and fine control over complex animations. Better suited for the custom orb behaviors we needed.

### Custom Components over UI Libraries
Built components from scratch to match the Figma design exactly. This approach keeps the bundle size lean, gives us precise control over animations, and ensures the orbs behave exactly as intended. Sometimes custom is the right choice.

## Final Thoughts

Three hours isn't much time, but the constraint actually helped me focus on what mattered. Got the core experience working, made it responsive, and set up a solid foundation for future features.

The design token system was probably the best decision - saved me from copy-pasting colors everywhere and made the whole thing way more maintainable.

If I had unlimited time, I'd hook it up to real AI, add proper tests, and polish those animations until they were perfect. But for a 3-hour sprint, I'm pretty happy with how it turned out!