"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PostList } from "@/components/PostList";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { PostProvider } from "@/contexts/PostContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Page = () => {
  
  return ( 
  
    <ThemeProvider>
      <Container>
      <Button label="" onClick={() => { }} /> 
        <PostProvider>
          <div className="container mx-auto">  
            <Header />
            <PostList />
            <Footer />
          </div>
        </PostProvider>
        
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
      
  );  
}

export default Page;