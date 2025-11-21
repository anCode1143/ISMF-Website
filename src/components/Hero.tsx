import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ismfLogo from "@/assets/ismf-logo.png";
import { useNavigate } from "react-router-dom";

const Stat = ({ label, value, suffix = "", duration = 2.5 }: { label: string; value: number; suffix?: string; duration?: number }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <p className="text-3xl md:text-5xl font-bold text-white mb-2">
        <CountUp end={value} duration={duration} decimals={value < 10 ? 1 : 0} />
        {suffix}
      </p>
      <p className="text-sm md:text-base text-white/80 font-medium tracking-wide">{label}</p>
    </motion.div>
  );
};

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-cornflower via-delft to-oxford text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative mx-auto px-4 py-20 md:py-32 z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img 
              src={ismfLogo} 
              alt="ISMF Logo" 
              className="h-24 md:h-32 w-auto mb-8 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Title and subtitle with staggered animation */}
          <motion.div 
            className="space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Irish Student Managed Fund
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
            Welcome to the Irish Student Managed Fund, where education meets empowerment. We're on a mission to revolutionise the student experience by providing a unique investment platform tailored for students.
            </p>
          </motion.div>
          
          {/* Interactive buttons with hover animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 group bg-blush text-oxford hover:bg-blush/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                // Navigation: route Learn More to the People page
                onClick={() => navigate('/people')}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white/30 bg-white/10 hover:bg-white hover:text-oxford transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
                onClick={() => navigate('/research')}
              >
                View Research
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated stats section */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 z-10"
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {/* will change numbers later, just need to run */}
            <Stat label="Assets Under Management" value={250} suffix="M+" /> 
            <Stat label="Active Members" value={250} />
            <Stat label="Annual Return" value={250} suffix="%" />
          </div>
        </div>
      </motion.div>
      
      
      
    </section>
  );
};
