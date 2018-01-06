{
    "targets": [
        {
            "target_name": "throestlhash",
            "sources": [
                "throestlhash.cc",
                "sha3/groestl.c",
                "throestl.h",
                "throestl.c",
            ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
