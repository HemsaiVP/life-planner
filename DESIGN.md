# Slate design: "Board"

**Whiteboard by day, chalkboard by night.**

Status: approved and applied in version 4.0, 14 October 2026. The app is called Slate from version 4.1, with a chalk tally icon (four chalk strokes and a yellow diagonal on slate green). Previewed first on the design canvas "Life Planner · Board redesign". Every change to how the app looks follows this file.

---

## 1. The brief

Hemsai's brief, kept word for word so every build answers to it:

> You tend to converge toward generic, "on distribution" outputs. In frontend design, this creates what users call the "AI slop" aesthetic. Avoid this: make creative, distinctive frontends that surprise and delight. Focus on:
>
> **Typography:** Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics.
>
> **Color & Theme:** Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Draw from IDE themes and cultural aesthetics for inspiration.
>
> **Motion:** Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions.
>
> **Backgrounds:** Create atmosphere and depth rather than defaulting to solid colors. Layer CSS gradients, use geometric patterns, or add contextual effects that match the overall aesthetic.
>
> **Avoid:** overused font families (Inter, Roboto, Arial, system fonts); clichéd color schemes (particularly purple gradients on white backgrounds); predictable layouts and component patterns; cookie-cutter design that lacks context-specific character. Vary between light and dark themes, different fonts, different aesthetics. Think outside the box.

---

## 2. The idea

Hemsai's days are run from boards. Econ lectures are written on chalkboards. Gym programmes live on the whiteboard by the racks. A plan for the day is something you write up in the morning, tick off as you go and wipe at night.

So the planner is a board:

| | Day board | Night board |
|---|---|---|
| What it is | A whiteboard: cool white, marker pens, sticky notes held by magnets | A chalkboard: slate green, chalk, dust and eraser sweeps |
| Default on | Phone | Laptop (left open all evening) |
| Feel | Crisp, bright, quick to scan between lectures | Calm, low glare, made for the desk at night |

Each device picks Day board, Night board or **Auto** (Day board until 20:00, Night board after). Auto turns the board to chalk as the evening's business block and the 22:30 wind-down approach.

**Rejected on the way here:**
- *Ledger paper* (cream, serif headings, red ink): fits finance, but cream plus serif plus a red accent is the most common generated look.
- *Sky that follows the time of day*: pretty, but it says nothing about lectures, the gym or his business.

---

## 3. Principles

1. **Write, don't decorate.** Handwriting is only for what you would actually write on a board: the day's name, ticks, counts, tallies and short margin notes. Everything you read at length or tap is set in Atkinson Hyperlegible.
2. **One loud thing per screen.** Today: the highlighter on the block you are in now. Gym: the exercise you are doing. Food: the protein figure. Progress: the tallies. Everything around it stays quiet.
3. **Marker colours carry meaning.** Each kind of block has its own marker colour, used for its box, its dot and its tick. Colour is never the only signal: the words always say what the thing is.
4. **Things move when something happens.** One write-in when a screen opens. A tick draws itself when you tick. Nothing loops, pulses or bounces on its own.
5. **Readable mid-set.** Titles 17 px or more, every target at least 44 px, text at least 4.5:1 against the board. The app gets checked between sets and on a bike stop.

---

## 4. Colour

Tokens are CSS variables on `:root`. The Day board is the default; the Night board redefines the same names under `[data-board="night"]`.

### Day board (whiteboard)

| Token | Hex | Use |
|---|---|---|
| `--board` | `#EEF1F0` | The whiteboard. Cool, never cream. |
| `--sheet` | `#F8FAF9` | Panels that need to lift off the board (dialogs, the laptop columns) |
| `--ink` | `#1A1D23` | Black marker: titles, body text, the + button |
| `--ink-2` | `#4F5661` | Secondary text (6.9:1 on the board) |
| `--rule` | `#D3D9D8` | Ruled lines and hairlines |
| `--hi` | `#FFE14A` | Highlighter: only the block you are in now |

### Night board (chalkboard)

| Token | Hex | Use |
|---|---|---|
| `--board` | `#1D2925` | The chalkboard: slate green |
| `--sheet` | `#24332E` | Raised panels |
| `--ink` | `#EEEDE4` | White chalk |
| `--ink-2` | `#B8C3BD` | Secondary text (8:1 on the board) |
| `--rule` | `rgba(238,237,228,.14)` | Chalk lines |
| `--hi` | `#F3E38D` | Yellow chalk: only the block you are in now |

### Marker and chalk colours (one per kind of block)

| Kind | Day board marker | Night board chalk |
|---|---|---|
| Lectures and classes | `#6A3BA3` purple | `#C8B5F3` |
| Study | `#1E4FC2` blue | `#9DC8F2` |
| Academy | `#0C7C78` teal | `#8BD8CC` |
| Gym | `#CC2F2A` red | `#F3A29E` |
| Business | `#1F7F45` green | `#A6DB98` |
| Career | `#D2600F` orange (boxes and dots only, not small text) | `#F5B77A` |
| Meals and shopping | `#8A5A1F` brown | `#DDBB8C` |
| Admin and review | `#263C78` navy | `#AFB9F0` |
| Routine, travel, free | `#66707A` grey | `#A9B4AE` |

### Sticky notes (Day board only)

Yellow `#FFE97A`, blue `#CBE6FF`, pink `#FFC9D9`, green `#CFEFBF`. Black marker text on all of them. On the Night board they become chalk-drawn boxes.

**Dominant and sharp:** the board colour dominates. Ink is the second colour. Marker colours are small and sharp: boxes, dots and ticks. The highlighter appears once per screen.

---

## 5. Type

| Role | Family | Weights | Where |
|---|---|---|---|
| Hand | **Kalam** | 400, 700 | Day names, big counts on sticky notes, the protein figure, ticks and margin notes ("now"), tallies' labels |
| Text | **Atkinson Hyperlegible** | 400, 700, italic 400 | Everything else: block titles, notes, buttons, inputs, navigation |

Google Fonts link:
`https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&family=Kalam:wght@400;700&display=swap`

Atkinson Hyperlegible was drawn by the Braille Institute so letters cannot be mistaken for each other, which suits a screen glanced at mid-set. Kalam is a felt-tip hand that reads as marker on the Day board and as chalk on the Night board.

### Scale (phone)

| Use | Font | Size / line |
|---|---|---|
| Day name ("Tuesday") | Kalam 700 | 46 / 48 |
| Big figure (protein, counts) | Kalam 700 | 26–64 |
| Block title | Atkinson 700 | 17 / 22 |
| Body and notes | Atkinson 400 | 14.5 / 20 |
| Small print | Atkinson 400 | 13 / 18 |
| Times | Atkinson 700, tabular figures | 15 |

Laptop: day name 56, block title 16, everything else the same.

### Rules

- Sentence case everywhere. No all-caps labels, no letter-spaced eyebrows above headings.
- No monospace faces. Times line up with `font-variant-numeric: tabular-nums` in a fixed-width column.
- Write meta lines as sentences ("13 October. Home day, week 3 of autumn term."), not strings joined with middle dots.
- Buttons say what happens ("Start 3:00 rest", "Log my usual day"). No arrows appended to button text.
- Handwriting never carries a sentence longer than about six words.

---

## 6. Layout

All three layouts keep their jobs. Only the look changes.

### B · Agenda (phone default)

```
Tuesday                         [Tomorrow]
13 October. Home day, week 3.
‹  M (T) W  T  F  S  S  ›          ← today circled in marker
┌─────────┐ ┌─────────┐
│ Behind  │ │ Next due│               sticky notes, 2 × 2,
│ 4 lect. │ │ EC2C1 PS│               held by magnets,
└─────────┘ └─────────┘               tilted ±1.5°
┌─────────┐ ┌─────────┐
│ Gym  |  │ │ Protein │
└─────────┘ └─────────┘
✓ Done earlier: wake up, breakfast, FM214
09:00 ○ EC2B1 is live until 11:00. You watch it at 15:00.
09:00 □ Study ▓▓▓▓▓▓▓▓▓▓▓▓ highlighter (now)
11:15 □ Study
12:30 □ Lunch
...
[Today Week Gym Progress Behind More]   hand underline on the current tab
```

The agenda is written straight on the board: no card around it. Rows are separated by space, not boxes.

### A · Calm focus (phone option)

One chalk-framed "now" box with the title in Kalam, the next four blocks underneath, then three small counts (behind, protein, gym tally).

### C · Desk (laptop default)

Sidebar, then three columns on one board: the day | now, behind and due | this week's tallies, food and bodyweight. Columns stack below 900 px.

Alignment: everything left-aligned to the time column. Only the big figures on sticky notes centre.

---

## 7. Components

**Agenda line.** Time (Atkinson 700, tabular) | hand-drawn box in the block's marker colour | title and one line of notes. Ticked: the box gets a drawn tick, the title gets a marker strike-through in the same colour, and the line drops to 55% opacity.

**Hand-drawn box and tick** (24 × 24 SVG, `stroke-width` 2, round caps):
- Box: `M3 4.5C8 3.6 16 3.4 21 4c.4 5 .2 11-.4 16.4-5.6.6-11.6.8-17 .2C3.2 15 3 9 3 4.5Z`
- Tick: `M6 12.5c2 1.5 3.5 3.1 4.6 5.1C13 12.5 16.2 8.4 20.5 5` (stroke 2.6)

**Now highlighter.** A `--hi` band behind the current block, slightly skewed (`skewX(-4deg)`), `mix-blend-mode: multiply` on the Day board. Draws in left to right once. A small red-marker "now" note sits next to the time.

**Live reminder line** (lectures you watch later). A hollow ring instead of a box, text in italic `--ink-2`: "EC2B1 is live until 11:00. Echo360 has it about 12:00, so you watch it at 15:00." Not tickable.

**Sticky notes** (Today's four counts). Pastel paper, a round magnet in a marker colour at the top, tilted between −1.5° and +1.5°, shadow `0 8px 12px -8px rgba(26,29,35,.4)`. The count is in Kalam, the label in Atkinson. Each one is a button to its screen.

**Tally marks** (gym sessions, home sessions). Drawn strokes for done, dashed strokes for still to do, a diagonal through every fifth. Reads faster than "1 of 4–5".

**Marker bar** (protein, hours). A hand-drawn outline, a marker fill, and the target zone hatched at 45°. On the Night board the fill is a chalk stroke.

**Chalk or marker frame** (the focus card). An irregular border (`border-radius: 18px 22px 16px 24px / 20px 16px 24px 18px`) with a 2 px marker or chalk line. The irregular radii are what make a box look hand-drawn; use them only on frames you would draw by hand.

**Buttons.** Primary: filled `--ink`, board-coloured text. Secondary: 2 px marker outline with irregular radii. Minimum 44 px high.

**Bottom navigation.** Plain icons drawn with round-capped strokes. The current tab gets a hand-drawn marker underline, not a filled pill.

**Dialogs.** A `--sheet` panel pinned by two magnets at its top corners. Slides up 12 px and fades in.

**Toasts.** A narrow sticky-note strip at the bottom, with Undo written as a button.

---

## 8. Motion

| Moment | What moves | Timing |
|---|---|---|
| A screen opens | The day name and each agenda line are written in left to right (`clip-path: inset(0 100% 0 0)` to `inset(0)`) | 420 ms each, 55 ms apart, `cubic-bezier(.25,.8,.25,1)` |
| Then | Sticky notes stick on: drop 10 px into their tilt | 500 ms, 70 ms apart, start at 700 ms |
| Then | The highlighter draws across the current block | 500 ms, starts at 900 ms |
| You tick a block | The tick draws (`stroke-dashoffset` 30 to 0), then the strike-through | 260 ms + 200 ms |
| You add food | The bar's fill grows; the new line is written in | 400 ms |
| You change tab | Content fades and rises 6 px | 180 ms |

That is the whole list. No looping animation anywhere. With `prefers-reduced-motion: reduce`, every animation is off and things simply appear.

---

## 9. Backgrounds

**Day board.** A diagonal sheen like light on a gloss board, plus "ghost writing": two or three faint words left from earlier plans (5–7% opacity, slightly blurred, tilted), never over text you need to read.

```css
background:
  linear-gradient(118deg, transparent 30%, rgba(255,255,255,.75) 46%, transparent 62%),
  radial-gradient(120% 60% at 85% -10%, rgba(30,79,194,.05), transparent 60%),
  var(--board);
```

**Night board.** Chalk dust clouds and long eraser sweeps.

```css
background:
  radial-gradient(60% 40% at 18% 12%, rgba(238,237,228,.06), transparent 70%),
  radial-gradient(50% 35% at 88% 72%, rgba(238,237,228,.05), transparent 70%),
  linear-gradient(100deg, transparent 18%, rgba(238,237,228,.045) 28%, transparent 44%),
  linear-gradient(97deg, transparent 58%, rgba(238,237,228,.035) 66%, transparent 80%),
  var(--board);
```

---

## 10. Quality floor

- Contrast: text 4.5:1, large text 3:1. Orange marker is for boxes and dots only.
- Targets 44 × 44 px or bigger. Inputs at least 16 px text so phones do not zoom.
- Visible focus: a 2 px `--ink` outline offset 2 px.
- Works from 360 px wide to a full laptop screen. No sideways scrolling.
- Reduced motion respected.

---

## 11. Never

- Inter, Roboto, Arial, system-ui, Space Grotesk, or any monospace face.
- Cream backgrounds, serif display headings with a terracotta or red accent, purple gradients.
- Identical rounded cards with the same soft grey shadow, gradient washes as decoration, glass effects.
- All-caps eyebrow labels, middle-dot meta strings, arrows in button text, emoji.
- Handwriting for anything you need to read carefully: buttons, form labels, block notes.
- More than one highlighter, or more than one loud thing, per screen.

---

## 12. Applying it to the app

Done in version 4.0. Setup calls the board picker "Board on this device"; Auto shows the chalkboard from 20:00 until 06:00. Hours bars use the chalk-line style from the desk preview (a marker line with the rest dashed).

Nothing about how the planner works changes: same tabs, ticks, editing, food log, gym log, Behind and Progress. The work is:

1. Swap the colour variables in `index.html` for the tokens above and add `[data-board="night"]`.
2. Load Kalam and Atkinson Hyperlegible; use Kalam only where section 5 says.
3. Replace circle check buttons with the hand-drawn box and tick; add the strike-through.
4. Today: sticky notes for the four counts, the highlighter on the current block, the agenda written straight on the board.
5. Gym and home sessions as tallies; protein and hours as marker bars.
6. The page-load write-in and the tick animation, with reduced motion respected.
7. Setup › Colours on this device: Day board, Night board, Auto (night after 20:00). Layouts A, B and C stay.
