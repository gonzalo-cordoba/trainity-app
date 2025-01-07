import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Dumbbell, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const clases = [
  {
    id: 1,
    nombre: "Yoga",
    horario: "10:00 AM",
    cupos: 5,
    instructor: "Emma Wilson",
    duracion: "60 min",
  },
  {
    id: 2,
    nombre: "Spinning",
    horario: "11:30 AM",
    cupos: 3,
    instructor: "John Doe",
    duracion: "45 min",
  },
  {
    id: 3,
    nombre: "Pilates",
    horario: "2:00 PM",
    cupos: 8,
    instructor: "Sarah Johnson",
    duracion: "55 min",
  },
  {
    id: 4,
    nombre: "Zumba",
    horario: "4:30 PM",
    cupos: 10,
    instructor: "Carlos Rodriguez",
    duracion: "50 min",
  },
];

export const TabsReservas = () => {
  return (
    <Tabs defaultValue="todas" className="w-full">
      <TabsList className="bg-gray-800 text-gray-400 mb-6">
        <TabsTrigger
          value="todas"
          className="data-[state=active]:bg-mint-green data-[state=active]:text-gray-900"
        >
          Todas las clases
        </TabsTrigger>
        <TabsTrigger
          value="yoga"
          className="data-[state=active]:bg-mint-green data-[state=active]:text-gray-900"
        >
          Yoga
        </TabsTrigger>
        <TabsTrigger
          value="cardio"
          className="data-[state=active]:bg-mint-green data-[state=active]:text-gray-900"
        >
          Cardio
        </TabsTrigger>
        <TabsTrigger
          value="fuerza"
          className="data-[state=active]:bg-mint-green data-[state=active]:text-gray-900"
        >
          Fuerza
        </TabsTrigger>
      </TabsList>
      <TabsContent value="todas" className="mt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {clases.map((clase, index) => (
            <motion.div
              key={clase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 overflow-hidden group">
                <CardHeader className="bg-gradient-to-r from-mint-green/20 to-blue-600/20 pb-2">
                  <CardTitle className="text-white flex justify-between items-center">
                    {clase.nombre}
                    <Dumbbell className="w-5 h-5 text-mint-green" />
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {clase.instructor}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      {clase.horario}
                    </div>
                    <div className="text-mint-green font-medium">
                      {clase.duracion}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-4 h-4 mr-2" />
                    {clase.cupos} cupos disponibles
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-800/50">
                  <Button className="w-full bg-mint-green text-gray-900 hover:bg-mint-green/90 group-hover:translate-y-0 translate-y-8 transition-transform duration-300">
                    Reservar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      {/* Contenido similar para otras pestañas */}
    </Tabs>
  );
};
