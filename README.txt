Project GitHub: https://github.com/liamfotheringham/MSc-Project

Additional data files, including pre-compiled trial stimuli, experiment results, spreadsheets, etc.: https://gla-my.sharepoint.com/:f:/g/personal/2595981f_student_gla_ac_uk/EicCmjAUYG9Mn_IbPpcT04QBK-Mq8cpuJwfGooyVzLuxYg?e=srYDdF

Disclaimer: Instructions written below have been tested with GraphViz 2.49.1 on a Windows 10 system only using the command line interface (CLI).

PRE-REQUISITES:
- Requires installation of GraphViz and its edgepaint package 
- Download and installation instructions found here: https://www.graphviz.org/download/
- download 32-bit EXE installer and 32-bit ZIP archive
        - once GraphViz is installed, copy "edgepaint.exe", "edgepaintlib.lib" and "lab_gamut.dll" from ZIP archive to bin folder of your GraphViz install

    - After installation, you may be required to restart your system to establish paths in environment variables

- Open CLI in folder containing shell scripts

COLOURING GRAPH:

- Copy .gv files you wish to colour from either FDP, Neato, or Orthogonal folders
    - Those without "_Coloured" appended to the end are uncoloured

- Type command: sh colour_edges [inputfile].gv
    - Example: sh colour_edges ZKCFDP.gv

- resulting graph and graph drawing will be produced with "_Coloured" appended to end of filename


PRODUCING TRIAL STIMULI:

- navigate to either FDP, Neato or Orthogonal folders, copy any files that are appended with "_no_close.gv"
    - This graph will be used to create the trial stimuli

- for two highlighted node pairs
    - *WARNING: IF RUN THIS WILL CREATE 1122 FILES ON YOUR SYSTEM*

    - Type command: sh highlight_nodes_pairs [inputfile].gv 34 [sfdp|neato]

        - Example: sh highlight_nodes_pairs ZKCFDP_no_close.gv 34 neato

        - For exact drawings used in trials use neato (this will not override hardcoded position values produced by other layouts that are embedded in graphs)

- for individual nodes
    - Type command: sh highlight_nodes_individual [inputfile].gv 34 [sfdp|neato]

        - Example: sh highlight_nodes_individual ZKCFDP_no_close.gv 34 neato

        - For exact drawings used in trials use neato (this will not override hardcoded position values produced by other layouts that are embedded in graphs)

- all resulting stimuli (.gv and .pngs) will be created and put into orderly folders