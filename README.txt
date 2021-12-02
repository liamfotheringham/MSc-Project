Prerequisites:
- Requires installation of GraphViz and its edgepaint package 
    - Download and installation instructions found here: https://www.graphviz.org/download/

- Disclaimer: Instructions written here have been tested on a Windows 10 system only. 

Colouring Graph:
- Type command: sh colour_edges [inputfile].gv
- resulting graph and graph drawing will be produced

Producing Trial Stimuli:
- navigate to either FDP, Neato or Orthogonal folders, copy any files that are appended with "_no_close.gv"
    - This graph will be used to create the stimuli trials

- for two highlighted node pairs
    - Type command: sh highlight_nodes_pairs [inputfile].gv 34 [FDP|Neato]
        - For othogonal drawings use neato

- for individual nodes
    - Type command: sh highlight_nodes_individual [inputfile].gv 34 [FDP|Neato]
        - For othogonal drawings use neato

- all created stimuli (.gv and .pngs) will be created and put into orderly folders