# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend (React + TypeScript + Vite)

- `pnpm dev` - Start development server on port 1420
- `pnpm build` - Build production frontend (runs TypeScript compiler then Vite build)
- `pnpm preview` - Preview production build

### Tauri (Desktop App)

- `pnpm tauri dev` - Start Tauri development mode (builds both frontend and Rust backend)
- `pnpm tauri build` - Build production Tauri app

### Code Quality

- `pnpm lint` - Run Biome linter
- `pnpm format` - Format code with Biome
- `pnpm check` - Run Biome check and auto-fix issues

## Architecture

This is a Tauri desktop application with a React frontend featuring a rich text editor built on TipTap.

### Core Structure

- **Frontend**: React 19 + TypeScript + Vite + TailwindCSS
- **Backend**: Rust + Tauri for desktop app capabilities
- **Editor**: Custom TipTap implementation with modular toolbar sections
- **UI**: Radix UI components with shadcn/ui styling patterns

### Key Components

- `src/App.tsx` - Main app wrapper using MinimalTiptapOne editor
- `src/Editor.tsx` - Simplified editor with minimal toolbar (bold, italic, underline, strikethrough, code)
- `src/components/minimal-tiptap/minimal-tiptap.tsx` - Full-featured editor with complete toolbar
- `src/components/minimal-tiptap/` - Modular TipTap editor implementation with:
  - `components/section/` - Toolbar sections (one through five) for different editor actions
  - `extensions/` - Custom TipTap extensions for enhanced functionality
  - `hooks/use-minimal-tiptap.ts` - Core editor configuration and state management

### Import Paths

- Uses `@/*` alias pointing to `src/` directory
- Components follow shadcn/ui patterns in `src/components/ui/`

### Styling

- TailwindCSS v4 with Shadcn
- Biome for formatting with tab indentation and double quotes
- Dark mode support via next-themes

### Tauri Configuration

- Rust backend in `src-tauri/` with minimal dependencies
- Desktop capabilities configured in `src-tauri/tauri.conf.json`
