export const circus =
`
        +10-15V                0,047R                                        
       ●─────────○───────○─░░░░░─○─○─────────○────○─────╮                    
    +  │         │       │       │ │         │    │     │                    
    ─═════─      │       │       │ │         │    │     │                    
    ─═════─    ──┼──     │       │╭┴╮        │    │     │                    
    ─═════─     ─┼─      │       ││ │ 2k2    │    │     │                    
    -  │      470│ +     │       ││ │        │    │     │                    
       │       uF│       ╰──╮    │╰┬╯       ╭┴╮   │     │                    
       └─────────○          │    │ │     1k │ │   │     ▽ LED                
                 │         6│   7│ │8       │ │   │     ┬                    
              ───┴───    ╭──┴────┴─┴─╮      ╰┬╯   │     │                    
               ─═══─     │           │1      │  │ / BC  │                    
                 ─       │           ├───────○──┤/  547 │                    
                GND      │           │       │  │ ▶     │                    
                         │           │      ╭┴╮   │     │                    
               ╭─────────┤           │  220R│ │   ○───┤├┘  IRF9Z34           
               │         │           │      │ │   │   │├─▶                   
               │         │  MC34063  │      ╰┬╯   │   │├─┐ BYV29       -12V6 
               │         │           │       │    │      ○──┤◀─○────○───X OUT
             - │ +       │           │2      ╰────╯      │     │    │        
6000 micro ────┴────     │           ├──○                C│    │   ─── 470   
Farad, 40V ─ ─ ┬ ─ ─     │           │ GND               C│    │   ███  uF   
Capacitor      │         │           │3                  C│    │    │\\       
               │         │           ├────────┤├╮        │     │   GND       
               │         ╰─────┬───┬─╯          │       GND    │             
               │              5│  4│            │              │             
               │               │   ╰────────────○──────────────○             
               │               │                               │             
               ╰───────────────●─────/\\/\\/─────────○─────░░░░──╯             
                                     2k            │         1k0             
                                                  ╭┴╮                        
                                                  │ │5k6   3k3               
                                                  │ │in Serie                
                                                  ╰┬╯                        
                                                   │                         
                                                  GND                        
`;

export let catHello =
`
          ╭────────────╮
          │  Have a    │
          │ good day!! │
        ╭─┼────────────╯
 /\\_/\\  ╰─╯             
( o.o )                 
 > ^ <                  
`

export const graphs = [
    `
    
             ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─                     
              Edge Region 1                                           │                    
             │                                                                             
                   ┌──────────────┐   send msg to ┌──────────────┐    │                    
 /\\_/\\       │     │┌─────────────┴┐   websocket  │┌─────────────┴┐                        
( o.o ) ◀══════════▶┤┌─────────────┴┐◀═══════════▶└┤┌─────────────┴┐  │                    
 > ^ <       │      └┤    Envoy     │ sub to this  └┤Gateway server│                       
                     └──────────────┘   channel     └───────▲──────┘  │                    
             │              ▲                               │                              
              ─ ─ ─ ─ ─ ─ ─ ║ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │ ─ ─ ─ ─ ┘                    
 /\\_/\\                      ║                               │                              
( o.o ) ◀═══════════════════╝                               │ send msg to all GS subs      
 > ^ <                                                      └───────────────────────┐      
   │     ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
   │      Main region                                                               │     │
   │     │                                                                          │      
   │         ┌──────────────┐               ┌──────────────┐            ┌───────────┼──┐  │
   │     │   │┌─────────────┴┐     send     │┌─────────────┴┐           │┌──────────┼──┴┐  
   └───── ──▶└┤┌─────────────┴┐ channel msg └┤┌─────────────┴┐          └┤┌─────────┴───┴┐│
         │    └┤    Webapp    ├───────────────▶ Admin Server ├───────────▶┤Channel Server│ 
               └───────┬──────┘               └──────────────┘  route to  └──────────────┘│
         │             │ store                                  channel                    
                       ▼ message                                server                    │
         │         ░░░░░░░░                                                                
                   ░Vitess░                                                               │
         │         ░░░░░░░░                                                                
                                                                                          │
         └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
    `,
    `


                  ┌───────────────────────┐                
                  │         Root          │                
                  └───────────□───────────┘                
                              │                            
                ┌─────────────┴─────────────┐              
         ┌──────▼─────────┐      ┌──────────▼─────┐        
         │    Option A    │      │    Option B    │        
         └─────┬──────○───┘      └──○──────┬──────┘        
               │      │             │      │               
         ┌─────┘      │             │      └─────┐         
         │            │             │            │         
┌────────▼───────┐    │             │    ┌───────▼────────┐
│   A Handler    │    │             │    │   B Handler    │
└────────────────┘    │             │    └────────────────┘
                      │             │                      
                      │             │                      
                ┌─────▼─────────────▼────┐                 
                │      Application       │                 
                │         State          │                 
                └────────────────────────┘                 
    `,
    `
                            Stack                              
                                                               
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │█████│
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │██6██│
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │█████│
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │
│     │ │     │ │█████│ │     │ │█████│ │     │ │█████│ │░░░░░│
│     │ │     │ │██3██│ │     │ │██4██│ │     │ │██5██│ │░░5░░│
│     │ │     │ │█████│ │     │ │█████│ │     │ │█████│ │░░░░░│
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │
│     │ │█████│ │░░░░░│ │█████│ │░░░░░│ │█████│ │░░░░░│ │░░░░░│
│     │ │██2██│ │░░2░░│ │██2██│ │░░2░░│ │██2██│ │░░2░░│ │░░2░░│
│     │ │█████│ │░░░░░│ │█████│ │░░░░░│ │█████│ │░░░░░│ │░░░░░│
│     │ │     │ │     │ │     │ │     │ │     │ │     │ │     │
│█████│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│
│██1██│ │░░1░░│ │░░1░░│ │░░1░░│ │░░1░░│ │░░1░░│ │░░1░░│ │░░1░░│
│█████│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│ │░░░░░│
└─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘
 PUSH    PUSH    PUSH     POP    PUSH     POP    PUSH    PUSH  
    `,
    `
                            Queue                             
                            
             ──────────────────────────────────────────────   
▒▒▒▒▒             ░░░░░   ░░░░░   ░░░░░   ░░░░░   █████       
▒▒6▒▒□────────▶   ░░5░░   ░░4░░   ░░3░░   ░░2░░   ██1██□─────┐
▒▒▒▒▒             ░░░░░   ░░░░░   ░░░░░   ░░░░░   █████      │
             ──────────────────────────────────────────────  ▼
                                                              
                                                              
                                                              
             ──────────────────────────────────────────────   
▒▒▒▒▒             ░░░░░   ░░░░░   ░░░░░   ░░░░░   █████       
▒▒7▒▒□────────▶   ░░6░░   ░░5░░   ░░4░░   ░░3░░   ██2██□─────┐
▒▒▒▒▒             ░░░░░   ░░░░░   ░░░░░   ░░░░░   █████      │
             ──────────────────────────────────────────────  ▼
    `,
    `
                             app.monosketch.io                        
    ┌────────────────────────────────────────────────────────────────┐
    │MonoSketch                   █ ▒ ▒ ▒                         ...│
    ├───────────────────────────────────────────────────┬────────────┤
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │Shape format│
    │                     Workspace                     │   panel    │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │            │
    │                                                   │   GitHub   │
    └───────────────────────────────────────────────────┴────────────┘
    `,
    `
    
                         /\\_/\\                             
                        ( o.o )                            
                         > ^ <                             
                                                           
┌──────────────────────────────────────────────────┬──────┐
│                                                  │░░░░░░│
│ Type something to search                         │░░GO░░│
│                                                  │░░░░░░│
└──────────────────────────────────────────────────┴──────┘
                                                           
       ┌─────────────────────┐ ┌─────────────────────┐     
       │     Cat search      │ │    I feel lucky     │     
       └─────────────────────┘ └─────────────────────┘     
    `,
    `
             Client                               Server              
               ■                                    ■                 
               │      Establish TCP Connection      │                 
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
            SYN├───────────────────────────────────▶░SYN             │
│              │                                    ░ACK              
            ACK│◀───────────────────────────────────░                │
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
               │                                    │                 
               │         SSL/TLS Handshake          │                 
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
    ClientHello░───────────────────────────────────▶░                │
│              ░                                    ░Server Hello     
    Certificate░◀───────────────────────────────────░Certificate     │
│  verification░                                    ░                 
               ░                                    ░                │
│     ClientKey░◀──────────────────────────────────▶░ServerFinished   
       Exchange│                                    │                │
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
               │                                    │                 
               │     Encrypted Application Data     │                 
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
          HTTP │◀──────────────────────────────────▶│HTTP            │
│          GET │                                    │Response         
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘
               │                                    │                 
               ■                                    ■                 
    `,

];