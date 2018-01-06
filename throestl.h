#ifndef THROESTL_H
#define THROESTL_H

#ifdef __cplusplus
extern "C" {
#endif

#include <stdint.h>

void throestl_hash(const char* input, char* output, uint32_t len);

#ifdef __cplusplus
}
#endif

#endif
