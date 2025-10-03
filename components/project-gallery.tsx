"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface Project {
  id: number
  title: string
  category: string
  description: string
  detailedDescription: string
  image: string
}

// Todo Demo Component
function TodoDemo() {
  const [todos, setTodos] = useState<{text: string, completed: boolean}[]>([])
  const [inputValue, setInputValue] = useState("")

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue.trim(), completed: false }])
      setInputValue("")
    }
  }

  const toggleTodo = (index: number) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const deleteAll = () => {
    setTodos([])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg" style={{
      background: 'linear-gradient(180deg, rgba(45, 0, 0, 0) 0%, #921616 100%)'
    }}>
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-center mb-4 text-gray-800 uppercase">
          Homework To-do List
        </h3>
        
        <div className="relative mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new todo"
            className="w-full border border-gray-300 rounded-lg p-3 pr-16 text-sm"
          />
          <button
            onClick={addTodo}
            className="absolute right-2 top-2 bg-red-600 text-white px-4 py-1 rounded text-sm hover:bg-red-700"
          >
            Add
          </button>
        </div>

        <div className="max-h-48 overflow-y-auto mb-4 space-y-2">
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center gap-3 p-2">
              <button
                onClick={() => toggleTodo(index)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm ${
                  todo.completed 
                    ? 'bg-red-600 border-red-600 text-white' 
                    : 'border-gray-300 text-transparent'
                }`}
              >
                ✓
              </button>
              <span className={`flex-1 ${
                todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
              }`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
          {todos.length === 0 && (
            <p className="text-gray-500 text-center py-4">No homework added yet</p>
          )}
        </div>

        <hr className="border-gray-200 mb-3" />
        
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{todos.length} items total</span>
          <button
            onClick={deleteAll}
            disabled={todos.length === 0}
            className="text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete All
          </button>
        </div>
      </div>
      
      <div className="mt-4 bg-white rounded-lg p-3 flex gap-4 text-sm">
        <span className="text-gray-600">Made By</span>
        <span className="text-red-600 font-bold">Kytto Valentine</span>
      </div>
    </div>
  )
}

const projects: Project[] = [
    {
        id: 1,
        title: "Mini Kitchen",
        category: "Scratch Game",
        description: "Create dishes by following recipes in this interactive cooking game.",
        detailedDescription:
            "Mini Kitchen is a fun game made in Scratch where you receive a recipe and must assemble the ingredients to make the dish. Enjoy experimenting with different recipes and see what you can cook up! by Shanice Munro Form 2-3",
        image: "/mini-kitchen.png",
    },
    // Other projects remain unchanged
    {
        id: 2,
        title: "Mini Arena WIP",
        category: "Scratch Game",
        description: "Choose your ball and battle to victory in this action-packed arena game.",
        detailedDescription:
            "Mini Arena WIP is an exciting battle game made in Scratch where you choose one of three balls and attack all the other balls until you defeat both opponents and claim victory. Created by Joshua O'Connor in Form 4-7, this work-in-progress game offers strategic combat gameplay with multiple ball characters to choose from.",
        image: "/ball-arena.png",
    },
    {
        id: 3,
        title: "Power Island",
        category: "Python Game",
        description: "Sustainable energy management simulation game set on a Caribbean island.",
        detailedDescription:
            "Power Island is an educational strategy simulation game developed in Python using PyGame, where players manage a virtual Caribbean island's energy system. The goal is to create sustainable energy infrastructure while balancing population needs, economy, and environment. Players start with limited budget and must strategically invest in renewable vs non-renewable energy, manage natural disasters, track pollution impact, and trade with AI-controlled neighboring islands. Created by Matthew Williams (5-3), Tori Senior (5-5), Tjon Smith (5-1), and Amari Cross (5-3) for the Caribbean STEAM Olympiad, this project won 2nd place and earned a silver medal. The game educates players about Caribbean energy challenges and promotes sustainable thinking through critical decision-making.",
        image: "/power-island.png",
    },
    {
        id: 4,
        title: "Homework Todo Website",
        category: "Web Development",
        description: "A todo app for managing homework tasks.",
        detailedDescription:
            "A straightforward homework todo website with essential functionality for task management. Users can add new homework tasks, delete individual tasks, and clear all tasks at once with a delete all feature. Created by Kytto Valentine in Form 2-1, this clean and simple web application focuses on core todo functionality without unnecessary complexity.",
        image: "/homework-todo.png",
    },
    {
        id: 5,
        title: "Console Wordle",
        category: "Python Game",
        description: "A 2-player console-based word guessing game inspired by Wordle.",
        detailedDescription:
            "Console Wordle is a Python-based command-line implementation of the popular Wordle game with a competitive 2-player twist. Players alternate between setting 5-letter words and guessing them, with each guesser having 5 attempts to find the correct word. The game features letter feedback (correct position, wrong position, or not in word), customizable number of rounds, score tracking, and terminal clearing for privacy between turns. Created by Jianna Thomas in Form 4-2, this interactive console application brings the addictive word-guessing gameplay to the terminal with a fun multiplayer format.",
        image: "/wordle.png",
    },
    {
        id: 6,
        title: "Strategic Planning Reporting Tool",
        category: "Business Application",
        description: "A comprehensive quarterly planning and objective tracking system concept.",
        detailedDescription:
            "Strategic Planning Reporting Tool is a school management application concept designed to streamline academic goal-setting and performance tracking for educational institutions. The system features quarterly planning modules (Q1, Q2, etc.), academic objectives management with detailed tracking capabilities, target setting with progress monitoring, and comprehensive reporting dashboards with data visualization. Users can create, edit, and delete academic objectives, set measurable targets, track completion percentages, and generate detailed reports for school performance analysis. Created by Tori Senior in Form 5-5, this concept demonstrates modern UI/UX principles for educational planning tools with intuitive navigation and clear data presentation.",
        image: "/sprt.png",
    },
]

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const prevProject = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + projects.length) % projects.length
      visible.push({ project: projects[index], offset: i })
    }
    return visible
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextProject()
    }, 3000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused, isAnimating])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject()
      if (e.key === "ArrowRight") nextProject()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAnimating])

  return (
    <div className="relative min-h-screen bg-background overflow-hidden bg-gradient-to-b from-white to-green-200">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">PROJECT GALLERY</h1>
          <nav className="flex gap-8">
            <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                <Image
                src={"/image.png"}
                alt="logo"
                width={40}
                height={40}
                
                />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Gallery */}
      <div
        className="relative h-screen flex items-center justify-center px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Large Title Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2
            className="text-[12vw] font-bold text-transparent leading-none tracking-tighter select-none"
            style={{
              WebkitTextStroke: "2px rgba(0, 0, 0, 0.1)",
            }}
          >
            PROJECTS
          </h2>
        </div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">
          {getVisibleProjects().map(({ project, offset }) => (
            <div
              key={project.id}
              className="absolute transition-all duration-700 ease-out cursor-pointer"
              style={{
                transform: `translateX(${offset * 45}%) scale(${offset === 0 ? 1 : 0.75}) rotateY(${offset * 15}deg)`,
                opacity: offset === 0 ? 1 : 0.4,
                zIndex: offset === 0 ? 10 : 5 - Math.abs(offset),
                filter: offset === 0 ? "none" : "blur(2px)",
              }}
              onClick={() => offset === 0 && setSelectedProject(project)}
              onMouseEnter={() => offset === 0 && setHoveredProject(project.id)}
              onMouseLeave={() => offset === 0 && setHoveredProject(null)}
            >
              <div className="relative w-[70vw] max-w-3xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground bg-card">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                    hoveredProject === project.id
                      ? "from-foreground/95 via-foreground/60 to-transparent"
                      : "from-foreground/90 via-foreground/20 to-transparent"
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 p-8 text-background transition-all duration-500 ${
                    hoveredProject === project.id ? "pb-12" : ""
                  }`}
                >
                  <p className="text-sm font-medium mb-2 tracking-wider">{project.category}</p>
                  <h3 className="text-4xl font-bold mb-2 text-balance">{project.title}</h3>
                  <p
                    className={`text-lg opacity-90 transition-all duration-500 overflow-hidden ${
                      hoveredProject === project.id ? "max-h-48 mb-4" : "max-h-8"
                    }`}
                  >
                    {hoveredProject === project.id ? project.detailedDescription : project.description}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-sm font-medium tracking-wider transition-all duration-500 ${
                      hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span>VIEW PROJECT</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          onClick={prevProject}
          disabled={isAnimating}
          size="icon"
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full disabled:opacity-50 shadow-lg backdrop-blur-md bg-primary/80 border border-primary/20 text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
        <Button
          onClick={nextProject}
          disabled={isAnimating}
          size="icon"
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full disabled:opacity-50 shadow-lg backdrop-blur-md bg-primary/80 border border-primary/20 text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all duration-300"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Progress Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 600)
                }
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-12 bg-primary" : "w-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="!max-w-7xl w-full h-[85vh] bg-background border-2 border-foreground p-0 overflow-hidden sm:!max-w-7xl">
          {selectedProject && (
            <>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 h-10 w-10 rounded-full backdrop-blur-md bg-primary/80 border border-primary/20 text-primary-foreground hover:bg-primary/90 hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <X className="h-5 w-5" />
              </button>
              <div className="h-full overflow-y-auto">
                <div className="relative h-[50vh] bg-muted">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <div className="p-12">
                  <p className="text-sm font-medium text-primary mb-3 tracking-wider uppercase">
                    {selectedProject.category}
                  </p>
                  <h2 className="text-5xl font-bold mb-6 text-balance text-foreground">{selectedProject.title}</h2>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>

                  {/* Demo content */}
                  <div className="min-h-[300px] rounded-xl border-2 border-border bg-muted/30 flex items-center justify-center overflow-hidden">
                    {selectedProject.category === "Scratch Game" ? (
                      <div className="w-full flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Interactive Demo</h3>
                        <iframe 
                          src={`https://scratch.mit.edu/projects/${
                            selectedProject.id === 1 ? "1206780689" : 
                            selectedProject.id === 2 ? "1208299987" : ""
                          }/embed`}
                          allowTransparency={true}
                          width="485" 
                          height="402" 
                          frameBorder="0" 
                          scrolling="no"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-2">Click the green flag to start!</p>
                      </div>
                    ) : selectedProject.id === 4 ? (
                      <TodoDemo />
                    ) : selectedProject.category === "Business Application" ? (
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-4">
                          <svg className="w-16 h-16 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground text-lg font-medium">No Demo Available</p>
                        <p className="text-sm text-muted-foreground mt-2">This is a concept design</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center">
                        <div className="mb-4">
                          <svg className="w-16 h-16 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground text-lg font-medium">Please Ask Representative to Run Application</p>
                        <p className="text-sm text-muted-foreground mt-2">Live demo available upon request</p>
                      </div> 
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
