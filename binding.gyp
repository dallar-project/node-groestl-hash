{
    "targets": [
        {
            "target_name": "groestlhash",
            "sources": [
                "groestlhash.cc",
                "sha3/groestl.c",
                "groestl.h",
                "groestl.c",
            ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
