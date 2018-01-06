#include "throestl.h"
#include <stdlib.h>
#include <stdint.h>
#include <string.h>
#include <stdio.h>

#include "sha3/sph_groestl.h"

void throestl_hash(const char* input, char* output, uint32_t len)
{
    char hash1[64];
    char hash2[64];
    char hash3[64];
    
    sph_groestl512_context ctx_groestl;
    sph_groestl512_init(&ctx_groestl);
    sph_groestl512(&ctx_groestl, input, len);
    sph_groestl512_close(&ctx_groestl, &hash1);
    
    sph_groestl512(&ctx_groestl, hash1, 64);
    sph_groestl512_close(&ctx_groestl, &hash2);

    sph_groestl512(&ctx_groestl, hash2, 64);
    sph_groestl512_close(&ctx_groestl, &hash3);
    
    memcpy(output, &hash3, 32);
}
