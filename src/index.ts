function log(
    target:any,
    key: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    console.log(`Loggin ${key} function`);
    return descriptor;
  }
  
  
  
  class Example {
    @log
    greet() {
      console.log("Hello, world!")
    }
  }
  
  
  const example = new Example()
  example.greet();