class Magic {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(spell) {
    this.length++;

    if (!this.head) {
      this.head = { spell };
      return this.length; 
    }

    const prevHead = this.head;
    this.head = { spell, prev: prevHead};
    return this.length;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.prev;
    return head.spell;
  }
    
  spellStack(spell) {
    if (!spell) {
      spell = this.pop();
      if (!spell) throw new Error("There is no spell in stack");
      return spell;
    } 

    if (spell.type === "sorcery" && this.length > 0) {
      throw new Error("Sorcery can be cast on empty stack only");
    }

    return this.push(spell);
  }  
}

let magic = new Magic();

console.log(magic.spellStack({'name':'Lightning Bolt', 'type':'instant'}))
// 1 
// Adds lightning bolt to the stack and returns the length of the stack

console.log(magic.spellStack()) 
// {'name':'Lightning Bolt', 'type':'instant'} 
// Removes lightning bolt from the stack and returns it
